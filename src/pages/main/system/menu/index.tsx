import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuWrapper } from './style'
import { Button, Card, Row } from 'antd'
import { WBaseTable, WBaseTableProps } from '@/base-ui/wtb'

interface IProps {
  children?: ReactNode
}

const Menu: FC<IProps> = () => {
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
          2: { color: '#f4f4f5', text: '按钮' }
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
              // 编辑用户
              // setModalContent(false, record)
              console.log(record)
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
  return (
    <MenuWrapper>
      <Card>
        <Row justify="space-between" className="card-header">
          <div className="header-title">菜单列表</div>
          <div className="header-btns">
            <Button type="primary">新增菜单</Button>
          </div>
        </Row>
        <WBaseTable {...tableConfig} />
      </Card>
    </MenuWrapper>
  )
}

export default memo(Menu)
