import { Table } from 'antd'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ExtendPropType, WColumType } from '../type'
import { propsListToColumns } from '../utils/utils'

export interface WtbProps {
  children?: ReactNode
  type?: 'api' | 'data'
  data: any[]
  wcolums: WColumType[]
  extendProps?: ExtendPropType[]
}

/**
 *
 *  带数据请求的表格还有，分页功能，自定义内置组件
 */
const Wtb: FC<WtbProps> = (props) => {
  const { data, wcolums, extendProps } = props
  const colums = propsListToColumns(wcolums, extendProps)
  // 对colums数据信息处理
  return (
    <div className="content">
      <Table
        dataSource={data}
        columns={colums}
        rowKey={(record: any) => String(record.id)}
        pagination={false}
      />
    </div>
  )
}

export default memo(Wtb)
