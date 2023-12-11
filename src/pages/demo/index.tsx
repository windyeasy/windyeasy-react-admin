import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Card from 'antd/es/card/Card'

import { colums, formItems, modalConfig } from './config'
import SearchForm from '@/base-ui/w-form/src/components/SearchForm'
import { DemoWrapper } from './style'
import WBaseTable from '@/base-ui/wtb/src'
import { useWtbGetData } from '@/base-ui/wtb/src/hooks/useWtbGetData'
import { Button } from 'antd'
import PageModal, { OnModalSubmitType } from '@/base-ui/page-modal'
import { usePageModal } from '@/base-ui/page-modal/hooks/usePageModal'
import { createUserData, editUserData } from '../main/system/user/service'
interface IProps {
  children?: ReactNode
}

const UserContent: FC<IProps> = () => {
  const { changeSearchInfo, fetchPageList } = useWtbGetData()
  const { setModalContent } = usePageModal()
  function submit(values: any) {
    changeSearchInfo(values)
  }
  function addUserClick() {
    setModalContent()
  }
  const addUserSubmit: OnModalSubmitType = (isNew, values, record) => {
    if (isNew) {
      createUserData(values).then((res) => {
        if (res.code === 0) {
          console.log('创建用户成功！')
          fetchPageList()
        } else {
          console.log('创建用户失败！', res.message)
        }
      })
    } else {
      // 编辑用户
      editUserData(record.id, values).then((res) => {
        if (res.code === 0) {
          console.log('编辑用户成功')
          fetchPageList()
        } else {
          console.log('编辑用户失败', res.message)
        }
      })
    }
  }
  return (
    <DemoWrapper>
      <Card>
        <SearchForm formname="testform" onSubmit={submit} formItems={formItems} />
      </Card>
      <Card>
        <Button type="primary" onClick={addUserClick}>
          用户添加
        </Button>
        <WBaseTable api="/users/list" wcolums={colums} />
      </Card>
      <PageModal onSubmit={addUserSubmit} modalConfig={modalConfig} formname="userForm" />
    </DemoWrapper>
  )
}

export default memo(UserContent)
