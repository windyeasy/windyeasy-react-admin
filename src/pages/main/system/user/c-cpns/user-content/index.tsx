import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { UserContentWrapper } from './style'
import Card from 'antd/es/card/Card'
import { Button, Pagination, Row, Table } from 'antd'
import { postUserList } from '@/services/main/system/system'
import { colums } from './config'

interface IProps {
  children?: ReactNode
}

const UserContent: FC<IProps> = () => {
  const [userList, setUserList] = useState<any[]>([])
  useEffect(() => {
    postUserList().then((res) => {
      if (res.data.list) {
        setUserList(res.data.list)
      }
    })
  }, [])
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
          <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        </div>
      </Card>
    </UserContentWrapper>
  )
}

export default memo(UserContent)