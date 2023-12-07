import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserContentWrapper } from './style'
import Card from 'antd/es/card/Card'
import { Button, Pagination, Row, Table } from 'antd'
import { colums } from './config'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const UserContent: FC<IProps> = () => {
  const { userList, pageTotal } = useAppSelector(
    (state) => ({
      userList: state.system.userList,
      pageTotal: state.system.pageTotal
    }),
    shallowEqual
  )
  return (
    <UserContentWrapper>
      <Card>
        <Row justify="space-between" className="header">
          <h3 className="title">用户列表</h3>
          <div className="header-btns">
            <Button type="primary">新建用户</Button>
          </div>
        </Row>
        <div className="content">
          <Table
            dataSource={userList}
            columns={colums}
            rowKey={(record: any) => String(record.id)}
            pagination={false}
          />
        </div>
        <div className="pagination">
          <Pagination total={pageTotal} showSizeChanger showQuickJumper />
        </div>
      </Card>
    </UserContentWrapper>
  )
}

export default memo(UserContent)
