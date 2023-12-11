import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Card from 'antd/es/card/Card'

// import MyForm from '@/components/w-form/src/index'
import { formItems } from './config'
import SearchForm from '@/components/w-form/src/components/SearchForm'

interface IProps {
  children?: ReactNode
}

const UserContent: FC<IProps> = () => {
  function submit(values: any) {
    console.log(values)
  }
  return (
    <>
      <Card>
        <SearchForm formname="testform" onSubmit={submit} formItems={formItems} />
      </Card>
    </>
  )
}

export default memo(UserContent)
