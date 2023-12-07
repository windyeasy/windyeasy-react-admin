import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import UserSearch from './c-cpns/user-search'
import UserContent from './c-cpns/user-content'

interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = () => {
  return (
    <>
      <UserSearch />
      <UserContent />
    </>
  )
}

export default memo(User)
