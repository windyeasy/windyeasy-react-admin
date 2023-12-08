import { WColumsType } from '@/components/wtb/src'
import React from 'react'
export const colums: WColumsType = [
  {
    title: '序号',
    dataIndex: 'id',
    render: (_, _2, index: number) => {
      return <>{index + 1}</>
    }
  },
  {
    title: '用户名',
    dataIndex: 'name'
  },
  {
    title: '真实姓名',
    dataIndex: 'realname'
  },
  {
    title: '手机号码',
    dataIndex: 'cellphone'
  },
  {
    title: '状态',
    dataIndex: 'enable'
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
  }
]
