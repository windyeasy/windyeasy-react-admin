import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LoginInfoWrapper } from './style'
import { Link } from 'react-router-dom'
import { useAntToken } from '@/hooks/useAntToken'

interface IProps {
  children?: ReactNode
}
const logo = require('@/assets/img/logo.png')
const LoginInfo: FC<IProps> = () => {
  const { token } = useAntToken()
  return (
    <LoginInfoWrapper>
      <Link to="/main" className="logo-content">
        <img className="login-img" src={logo} alt="windyeasy-admin" />
        {
          <h1
            style={{
              color: token.colorTextLabel
            }}
            className="login-title"
          >
            windyeasy-admin
          </h1>
        }
      </Link>
    </LoginInfoWrapper>
  )
}

export default memo(LoginInfo)
