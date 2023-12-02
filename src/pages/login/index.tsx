import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LoginWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  return <LoginWrapper>登录页面</LoginWrapper>
}

export default memo(Login)
