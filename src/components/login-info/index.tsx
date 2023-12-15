import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LoginInfoWrapper } from './style'
import { Link } from 'react-router-dom'
import { useAntToken } from '@/hooks/useAntToken'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}
const logo = require('@/assets/img/logo.png')
const LoginInfo: FC<IProps> = () => {
  const { token } = useAntToken()
  const { themeConfig, isCollapsed } = useAppSelector(
    (state) => ({
      themeConfig: state.theme.themeConfig,
      isCollapsed: state.main.isCollapsed
    }),
    shallowEqual
  )
  function showLoginTitle() {
    if (themeConfig.layoutMode === 'leftSider' && !isCollapsed) {
      return true
    } else if (themeConfig.layoutMode !== 'leftSider') {
      return true
    }
    return false
  }
  return (
    <LoginInfoWrapper>
      <Link to="/main" className="logo-content">
        <img className="login-img" src={logo} alt="windyeasy-admin" />
        {showLoginTitle() && (
          <h1
            style={{
              color: token.colorTextLabel
            }}
            className="login-title"
          >
            windyeasy-admin
          </h1>
        )}
      </Link>
    </LoginInfoWrapper>
  )
}

export default memo(LoginInfo)
