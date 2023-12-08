import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Card from 'antd/es/card/Card'

import { colums } from './config'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import CustomTable from '@/components/wtb/src'
interface IProps {
  children?: ReactNode
}

const UserContent: FC<IProps> = () => {
  const { userList } = useAppSelector(
    (state) => ({
      userList: state.user.userList
    }),
    shallowEqual
  )

  return (
    <>
      <Card>
        <div className="content">
          <CustomTable data={userList} wcolums={colums} />
        </div>
      </Card>
    </>
  )
}

export default memo(UserContent)
