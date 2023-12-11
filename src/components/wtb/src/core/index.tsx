import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Pagination, Row, Table } from 'antd'
import type { PaginationProps } from 'antd'

import { ExtendPropType, RequestConfig, RsponseConfig, WColumType } from '../type'
import { propsListToColumns } from '../utils/utils'

import { extractProps } from '../utils/extract-props'
import { shallowEqual } from 'react-redux'

import { useAppSelector } from '@/store'
import { useWtbGetData } from '../hooks/useWtbGetData'

export interface WtbProps {
  children?: ReactNode
  type?: 'api' | 'data'
  api?: string
  requestConfig?: RequestConfig
  responseConfig?: RsponseConfig
  data?: any[]
  wcolums: WColumType[]
  extendProps?: ExtendPropType[]
  tableConfig?: typeof Table // ant表格的额外配置信息
  paginationConfig?: typeof Pagination // ant配置的额外信息
  pagination?: boolean // 是否显示分页
  pPostion?: 'left' | 'center' | 'right' // 分页器布局位置
}

/**
 *
 *  带数据请求的表格还有，分页功能，自定义内置组件
 */
const Wtb: FC<WtbProps> = (props) => {
  const {
    data,
    wcolums,
    extendProps,
    type = 'api',
    pagination = true,
    tableConfig = {},
    paginationConfig = {},
    pPostion = 'center'
  } = props
  const colums = propsListToColumns(wcolums, extendProps)
  const { list, total, isLoading } = useAppSelector(
    (state) => ({
      list: state.wtb.list,
      total: state.wtb.total,
      isLoading: state.wtb.isLoading
    }),
    shallowEqual
  )
  // 使用封装的use
  const { fetchPageList, changePageInfo, changeFetchPageListParmas } = useWtbGetData()

  // 通过不同类型显示数据
  function fetchData() {
    if (type === 'api') {
      return list
    } else {
      return data
    }
  }
  // 处理分页器显示位置
  function handlePPostion(pPostion: string) {
    if (pPostion === 'left') {
      return 'start'
    }
    if (pPostion === 'right') {
      return 'end'
    }
    return 'center'
  }
  // 处理分页内容
  // 处理
  const handlePaginationChange: PaginationProps['onChange'] = (page, pageSize) => {
    // 改变page, 和pageSize
    changePageInfo(page, pageSize)
  }

  /**
   * 通过type类型来确定是自己发送请求还是，传递过来的数据
   */
  // 对colums数据信息处理
  useEffect(() => {
    if (type === 'api') {
      changeFetchPageListParmas(extractProps(props))
      fetchPageList()
    }
  }, [type])
  return (
    <>
      <div className="content">
        <Table
          loading={isLoading}
          dataSource={fetchData()}
          columns={colums}
          rowKey={(record: any) => String(record.id)}
          pagination={false}
          {...tableConfig}
        />
      </div>
      {type === 'api' && pagination && (
        <Row
          justify={handlePPostion(pPostion)}
          className="pagination"
          style={{ marginTop: '15px' }}
        >
          <Pagination
            total={total}
            showSizeChanger
            showQuickJumper
            onChange={handlePaginationChange}
            {...paginationConfig}
          />
        </Row>
      )}
    </>
  )
}

export default memo(Wtb)
