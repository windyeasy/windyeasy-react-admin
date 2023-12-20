import { WBaseTable } from '@/base-ui/wtb'
import { Button, Card, Row } from 'antd'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { tableConfig } from './config/table.config'
import { SearchForm } from '@/base-ui/w-form'
import { searchConfig } from './config/search.config'
import { UserWrapper } from './style'
import PageModal from '@/base-ui/page-modal'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/base-ui/page-modal/hooks/usePageModal'

interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = () => {
  const { setModalContent } = usePageModal()
  function addUser() {
    setModalContent()
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
            <Button type="primary" onClick={addUser}>
              新增用户
            </Button>
          </div>
        </Row>
        <WBaseTable {...tableConfig} />
      </Card>
      <PageModal modalConfig={modalConfig} formname="userForm" />
    </UserWrapper>
  )
}

export default memo(User)
