import { WBaseFormItem } from '@/components/w-form/src'
import { WBaseType } from '@/components/wtb/src'
import React from 'react'
export const colums: WBaseType = [
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
export const formItems: WBaseFormItem[] = [
  {
    type: 'input',
    label: '用户名',
    prop: 'name',
    placeholder: '请输入用户名'
  },
  {
    type: 'input',
    label: '真实姓名',
    prop: 'realname',
    placeholder: '请输入真实姓名'
  },
  {
    type: 'input',
    label: '手机号码',
    prop: 'cellphone',
    placeholder: '请输入手机号码'
  },
  {
    type: 'select',
    label: '状态',
    prop: 'enable',
    placeholder: '请选择状态',
    options: [
      { value: 1, label: '启用' },
      { value: 0, label: '禁用' }
    ]
  },
  {
    type: 'rangePicker',
    label: '创建时间',
    prop: 'createAt',
    // 在最后时机执行
    handleParams(values: any) {
      values['createAt'] = values['createAt']
        ? values['createAt'].map((item: any) => item!.toDate())
        : ''
      return values
    }
  }
]
