import React, { memo } from 'react'
import type { FC } from 'react'
import { ColumnsType } from 'antd/es/table'
import { utcFormat } from '@/utils/format'
import { Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useAppDispatch } from '@/store'
import { deleteUserById } from '../../service'
import { checkValueNotDefined } from '@/utils/checkValue'
import { fetchUserListAction, handleModalAction } from '../../store'

interface IProps {
  record?: any
}

const Operate: FC<IProps> = (props) => {
  const { record } = props
  const dispatch = useAppDispatch()
  const editClick = () => {
    dispatch(handleModalAction({ isModalNew: false, record }))
  }
  const deleteClick = () => {
    if (record && checkValueNotDefined(record.id)) {
      deleteUserById(record.id).then((res) => {
        if (res.code == 0) {
          dispatch(fetchUserListAction())
        } else {
          console.log('删除失败', res.message)
        }
      })
    }
  }
  return (
    <>
      <Button type="link" size="small" onClick={editClick} icon={<EditOutlined />}>
        编辑
      </Button>
      <Button type="link" icon={<DeleteOutlined />} size="small" onClick={deleteClick} danger>
        删除
      </Button>
    </>
  )
}

const TbOperate = memo(Operate)

export const colums: ColumnsType<any> = [
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
    title: '创建时间',
    dataIndex: 'createAt',
    render: (time: string) => {
      return <>{utcFormat(time)}</>
    }
  },
  {
    title: '更新时间',
    dataIndex: 'updateAt',
    render: (time: string) => {
      return <>{utcFormat(time)}</>
    }
  },
  {
    title: '操作',
    render: (_, record) => <TbOperate record={record} />
  }
]
