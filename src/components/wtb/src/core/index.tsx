import { Table } from 'antd'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { ExtendPropType, RequestConfig, RsponseConfig, WColumType } from '../type'
import { fetchListAndTotal, propsListToColumns } from '../utils/utils'
import { getPageList } from '../service'
import { extractProps } from '../utils/extract-props'
import { shallowEqual, useDispatch } from 'react-redux'
import { changeListAction, changeTotalAction } from '../store'
import { useAppSelector } from '@/store'

export interface WtbProps {
  children?: ReactNode
  type?: 'api' | 'data'
  api?: string
  requestConfig?: RequestConfig
  responseConfig?: RsponseConfig
  data?: any[]
  wcolums: WColumType[]
  extendProps?: ExtendPropType[]
}

/**
 *
 *  带数据请求的表格还有，分页功能，自定义内置组件
 */
const Wtb: FC<WtbProps> = (props) => {
  const { data, wcolums, extendProps, type = 'api' } = props
  const colums = propsListToColumns(wcolums, extendProps)
  const { list } = useAppSelector(
    (state) => ({
      list: state.wtb.list
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  // 通过不同类型显示数据
  function fetchData() {
    if (type === 'api') {
      return list
    } else {
      return data
    }
  }
  /**
   * 通过type类型来确定是自己发送请求还是，传递过来的数据
   */
  // 对colums数据信息处理
  useEffect(() => {
    if (type === 'api') {
      const { api, method, dataIndexs, totalIndexs } = extractProps(props)
      getPageList(api, method).then((res) => {
        const { total, list } = fetchListAndTotal(res, dataIndexs, totalIndexs)
        dispatch(changeTotalAction(total))
        dispatch(changeListAction(list))
      })
    }
  }, [type])
  return (
    <div className="content">
      <Table
        dataSource={fetchData()}
        columns={colums}
        rowKey={(record: any) => String(record.id)}
        pagination={false}
      />
    </div>
  )
}

export default memo(Wtb)
