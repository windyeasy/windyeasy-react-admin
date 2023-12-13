import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LoginInfoWrapper } from './style'

interface IProps {
  children?: ReactNode
}
const logo = require('@/assets/img/logo.png')
const LoginInfo: FC<IProps> = () => {
  return (
    <LoginInfoWrapper>
      <img className="login-img" src={logo} alt="windyeasy-admin" />
      {<h1 className="login-title">windyeasy-admin</h1>}
    </LoginInfoWrapper>
  )
}

export default memo(LoginInfo)
