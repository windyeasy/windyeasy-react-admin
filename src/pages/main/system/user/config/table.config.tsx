import React from 'react'
import { WBaseTableProps } from '@/base-ui/wtb/src'

export const tableConfig: WBaseTableProps = {
  api: '/user',
  pPosition: 'right',
  wcolumns: [
    {
      title: '序号',
      dataIndex: 'id',
      render: (_, _2, index: number) => {
        return <>{index + 1}</>
      }
    },
    {
      title: '用户名',
      dataIndex: 'username'
    },
    {
      title: '昵称',
      dataIndex: 'nickname'
    },
    {
      title: '电话',
      dataIndex: 'telephone'
    },
    {
      title: '邮箱',
      dataIndex: 'email'
    },
    {
      title: '备注',
      dataIndex: 'intro'
    },
    {
      type: 'utcTimer',
      title: '创建时间',
      dataIndex: 'createAt'
    },
    {
      type: 'utcTimer',
      title: '更新时间',
      dataIndex: 'updateAt'
    },
    {
      title: '操作',
      type: 'button',
      fixed: 'right'
    }
  ]
}
