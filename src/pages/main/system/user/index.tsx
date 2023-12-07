import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import UserSearch from './c-cpns/user-search'
import UserContent from './c-cpns/user-content'

import { useAppDispatch } from '@/store'
import { fetchUserListAction } from '@/store/main/system'
interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  //副作用代码
  useEffect(() => {
    // 获取用户列表塑胶
    dispatch(fetchUserListAction())
  }, [])
  return (
    <>
      <UserSearch />
      <UserContent />
    </>
  )
}

export default memo(User)
