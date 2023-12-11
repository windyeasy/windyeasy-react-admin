import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Card from 'antd/es/card/Card'

// import MyForm from '@/components/w-form/src/index'
import { colums, formItems } from './config'
import SearchForm from '@/components/w-form/src/components/SearchForm'
import { DemoWrapper } from './style'
import WBaseTable from '@/components/wtb/src'
import { useWtbGetData } from '@/components/wtb/src/hooks/useWtbGetData'
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
        <WBaseTable api="/users/list" wcolums={colums} />
      </Card>
    </DemoWrapper>
  )
}

export default memo(UserContent)
