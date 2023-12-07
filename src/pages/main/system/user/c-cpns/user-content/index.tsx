import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserContentWrapper } from './style'
import Card from 'antd/es/card/Card'
import { Button, Pagination, Row, Table } from 'antd'
import type { PaginationProps } from 'antd'
import { colums } from './config'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { changeCurrentPageAction, changePageSizeAction, fetchUserListAction } from '../../store'

interface IProps {
  children?: ReactNode
}

const UserContent: FC<IProps> = () => {
  const { userList, pageTotal } = useAppSelector(
    (state) => ({
      userList: state.user.userList,
      pageTotal: state.user.pageTotal
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()

  // 处理
  const handlePaginationChange: PaginationProps['onChange'] = (page, pageSize) => {
    dispatch(changePageSizeAction(pageSize))
    dispatch(changeCurrentPageAction(page))
    dispatch(fetchUserListAction())
  }
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
          <Pagination
            total={pageTotal}
            showSizeChanger
            showQuickJumper
            onChange={handlePaginationChange}
          />
        </div>
      </Card>
    </UserContentWrapper>
  )
}

export default memo(UserContent)
