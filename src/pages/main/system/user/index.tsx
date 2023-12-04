import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = () => {
  return <div>用户管理</div>
}

export default memo(User)
