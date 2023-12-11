import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Card from 'antd/es/card/Card'

import { colums, formItems } from './config'
import SearchForm from '@/base-ui/w-form/src/components/SearchForm'
import { DemoWrapper } from './style'
import WBaseTable from '@/base-ui/wtb/src'
import { useWtbGetData } from '@/base-ui/wtb/src/hooks/useWtbGetData'
import { Button } from 'antd'
interface IProps {
  children?: ReactNode
}

const UserContent: FC<IProps> = () => {
  const { changeSearchInfo } = useWtbGetData()
  function submit(values: any) {
    changeSearchInfo(values)
  }
  return (
    <DemoWrapper>
      <Card>
        <SearchForm formname="testform" onSubmit={submit} formItems={formItems} />
      </Card>
      <Card>
        <Button type="primary">用户添加</Button>
        <WBaseTable api="/users/list" wcolums={colums} />
      </Card>
    </DemoWrapper>
  )
}

export default memo(UserContent)
