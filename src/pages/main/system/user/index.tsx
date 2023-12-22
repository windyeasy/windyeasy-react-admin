import { WBaseTable, useWtbGetData } from '@/base-ui/wtb'
import { Button, Card, Row } from 'antd'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SearchForm } from '@/base-ui/w-form'
import { searchConfig } from './config/search.config'
import { UserWrapper } from './style'
import PageModal from '@/base-ui/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/base-ui/page-modal/hooks/usePageModal'
import { deleteUser, newUser } from './service'
import { WBaseTableProps } from '@/base-ui/wtb/src'
import { useMessageApi } from '@/utils/global-ant-proxy'
interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = () => {
  const { setModalContent } = usePageModal()
  const { fetchPageList } = useWtbGetData()
  function addUserClick() {
    setModalContent()
  }
  function newUserSubmit(isNew: boolean, values: any) {
    if (isNew) {
      newUser(values).then((res) => {
        if (res.code === 0) {
          console.log('用户添加成功')
          fetchPageList()
        }
        console.log(res)
      })
    }
  }
  const tableConfig: WBaseTableProps = {
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
        align: 'center',
        width: 180,
        fixed: 'right',
        buttons: [
          {
            type: 'primary',
            click: (record) => {
              setModalContent(false, record)
            },
            text: '编辑'
          },
          {
            type: 'primary',
            danger: true,
            popConfirmProps: {
              title: '删除用户',
              description: '是否确认删除当前用户?'
            },
            click: (record) => {
              deleteUser(record.id).then(() => {
                fetchPageList()
                useMessageApi()?.success('删除用户成功！')
              })
            },
            text: '删除'
          }
        ]
      }
    ]
  }
  return (
    <UserWrapper>
      <Card>
        <SearchForm formname="userSearchForm" formItems={searchConfig} />
      </Card>
      <Card>
        <Row justify="space-between" className="card-header">
          <div className="header-title">用户列表</div>
          <div className="header-btns">
            <Button type="primary" onClick={addUserClick}>
              新增用户
            </Button>
          </div>
        </Row>
        <WBaseTable {...tableConfig} />
      </Card>
      <PageModal modalConfig={modalConfig} onSubmit={newUserSubmit} formname="userForm" />
    </UserWrapper>
  )
}

export default memo(User)
