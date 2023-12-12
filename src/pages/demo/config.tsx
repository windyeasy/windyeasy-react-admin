import React, { FC } from 'react'
import { usePageModal } from '@/base-ui/page-modal/hooks/usePageModal'
import { PageModalConfig } from '@/base-ui/page-modal/type'
import { WBaseFormItem } from '@/base-ui/w-form/src'
import { WBaseType } from '@/base-ui/wtb/src'
import { getEntireDepartments, getEntireRoles } from '@/services/main/system'
import { fetchAsyncOptions } from '@/utils/fetch-async-options'
import { Button } from 'antd'
interface IProps {
  record: any
}
const Operate: FC<IProps> = (props) => {
  const { record } = props
  const { setModalContent } = usePageModal()
  function handleEdit() {
    setModalContent(false, record)
  }
  return (
    <>
      <Button onClick={handleEdit}>编辑</Button>
    </>
  )
}
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
  },
  {
    title: '操作',
    render: (_, record) => {
      return <Operate record={record} />
    }
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
    defaultValueUn: true,
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

export const modalConfig: PageModalConfig = {
  header: {
    newTitle: '用户添加',
    editTitle: '用户编辑'
  },
  editHidden: ['password'],
  formItmes: [
    {
      type: 'input',
      label: '用户名',
      prop: 'name',
      placeholder: '请输入用户名',
      rules: [{ required: true, message: '请输入用户名' }]
    },
    {
      type: 'input',
      label: '真实姓名',
      prop: 'realname',
      placeholder: '请输入真实姓名'
    },
    /**
     * 实现编辑时：有些配置项不展示，
     *    1. 分成两个配置项，添加一个，编辑一个，这个不采用，应该是跟modal相关的，
     * 所 以先在编辑哪里添加一个配置项：editHidden: ['password', ''],
     * addHidden: ['username']
     */
    {
      type: 'password',
      label: '登录密码',
      prop: 'password',
      placeholder: '请输入登录密码'
    },
    {
      type: 'input',
      label: '手机号码',
      prop: 'cellphone',
      placeholder: '请输入手机号码'
    },
    {
      type: 'select',
      label: '选择角色',
      prop: 'roleId',
      placeholder: '请选择角色',
      defaultValueUn: true,
      asyncOptions: fetchAsyncOptions(getEntireRoles)
    },
    {
      type: 'select',
      label: '选择部门',
      prop: 'departmentId',
      placeholder: '请选择部门',
      defaultValueUn: true,
      asyncOptions: fetchAsyncOptions(getEntireDepartments)
    }
  ]
}
