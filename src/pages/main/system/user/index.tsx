import { WBaseTable } from '@/base-ui/wtb'
import { Button, Card, Row } from 'antd'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { tableConfig } from './config/table.config'
import { SearchForm } from '@/base-ui/w-form'
import { searchConfig } from './config/search.config'
import { UserWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = () => {
  return (
    <UserWrapper>
      <Card>
        <SearchForm formname="userSearchForm" formItems={searchConfig} />
      </Card>
      <Card>
        <Row justify="space-between" className="card-header">
          <div className="header-title">用户列表</div>
          <div className="header-btns">
            <Button type="primary">新增用户</Button>
          </div>
        </Row>
        <WBaseTable {...tableConfig} />
      </Card>
    </UserWrapper>
  )
}

export default memo(User)
