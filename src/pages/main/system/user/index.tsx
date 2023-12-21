import { WBaseTable, useWtbGetData } from '@/base-ui/wtb'
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
import { newUser } from './service'

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
