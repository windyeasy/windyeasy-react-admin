import React from 'react'
import { WBaseType } from '@/base-ui/wtb/src'

export const columns: WBaseType = [
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
    title: '创建时间',
    dataIndex: 'createAt'
  },
  {
    title: '更新时间',
    dataIndex: 'updateAt'
  }
]
