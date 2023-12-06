import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import UserSearch from './c-cpns/user-search'

interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = () => {
  return (
    <>
      <UserSearch />
    </>
  )
}

export default memo(User)
