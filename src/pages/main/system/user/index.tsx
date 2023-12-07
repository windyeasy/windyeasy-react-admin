import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import UserSearch from './c-cpns/user-search'
import UserContent from './c-cpns/user-content'

import { postUserList } from '@/services/main/system/system'
interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = () => {
  const [userList, setUserList] = useState<any[]>([])
  // 获取用户表格数据
  function fetchUserList(info: any = {}) {
    postUserList(info).then((res) => {
      if (res.data.list) {
        setUserList(res.data.list)
      }
    })
  }
  // 事件处理
  const handleQueryClick = (values: any) => {
    // 处理时间字段
    values['createAt'] = values['createAt']
      ? values['createAt'].map((item: any) => item.toDate())
      : ''
    fetchUserList(values)
  }
  //副作用代码
  useEffect(() => {
    fetchUserList()
  }, [])
  return (
    <>
      <UserSearch queryClick={handleQueryClick} />
      <UserContent tableData={userList} />
    </>
  )
}

export default memo(User)
