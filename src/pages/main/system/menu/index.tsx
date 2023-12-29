import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuWrapper } from './style'
import { Button, Card, Row } from 'antd'
import { WBaseTable, WBaseTableProps, useWtbGetData } from '@/base-ui/wtb'
import PageModal, { OnModalSubmitType } from '@/base-ui/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/base-ui/page-modal/hooks/usePageModal'
import { addMenu, editMenu } from './service'
import { useMessageApi } from '@/utils/global-ant-proxy'

interface IProps {
  children?: ReactNode
}

const Menu: FC<IProps> = () => {
  const { setModalContent } = usePageModal()
  const { fetchPageList } = useWtbGetData()
  const tableConfig: WBaseTableProps = {
    api: '/menu',
    pagination: false,
    responseConfig: {
      dataIndex: 'data'
    },
    wcolumns: [
      {
        title: '菜单名称',
        dataIndex: 'menuName'
      },
      {
        title: '类型',
        dataIndex: 'menuType',
        type: 'tag',
        tag: {
          1: { color: '#1177c1', text: '菜单' },
          2: { color: 'gray', text: '按钮' }
        }
      },
      {
        title: '路由地址',
        dataIndex: 'url'
      },
      {
        title: '重定向地址',
        dataIndex: 'redirectUrl'
      },
      {
        title: '权限标识',
        dataIndex: 'permission'
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
              // 编辑菜单
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
              console.log(record)
            },
            text: '删除'
          }
        ]
      }
    ]
  }
  function addClick() {
    setModalContent()
  }
  const newUserSubmit: OnModalSubmitType = (isNew, values, record) => {
    if (isNew) {
      addMenu(values).then(() => {
        fetchPageList()
        useMessageApi()?.success('添加菜单成功！')
      })
    } else {
      // 编辑用户
      editMenu(record.id, values).then(() => {
        fetchPageList()
        useMessageApi()?.success('编辑菜单成功！')
      })
    }
  }
  return (
    <MenuWrapper>
      <Card>
        <Row justify="space-between" className="card-header">
          <div className="header-title">菜单列表</div>
          <div className="header-btns">
            <Button type="primary" onClick={addClick}>
              新增菜单
            </Button>
          </div>
        </Row>
        <WBaseTable {...tableConfig} />
      </Card>
      <PageModal modalConfig={modalConfig} onSubmit={newUserSubmit} formname="menuForm" />
    </MenuWrapper>
  )
}

export default memo(Menu)
