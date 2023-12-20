import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CrumbRightWrapper } from './style'
import { Dropdown, MenuProps } from 'antd'
import { localCache } from '@/utils/cache'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { changeIsLoginAction } from '@/pages/login/store'
import { useAntToken } from '@/hooks/useAntToken'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const CrumbRight: FC<IProps> = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { userInfo } = useAppSelector(
    (state) => ({
      userInfo: state.login.userInfo
    }),
    shallowEqual
  )
  function loginOut() {
    // 清除缓存
    localCache.clear()
    // 更改登录状态
    dispatch(changeIsLoginAction(false))
    // 跳转登录页
    navigate('/login')
  }
  const { token } = useAntToken()
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a onClick={loginOut}>退出登录</a>
    }
  ]
  return (
    <CrumbRightWrapper>
      <Dropdown menu={{ items }}>
        <a className="user-operate" style={{ color: token.colorTextDescription }}>
          <img
            className="avatar"
            src="https://img2.baidu.com/it/u=1978192862,2048448374&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500"
          />
          <span className="user-name">{userInfo.username}</span>
        </a>
      </Dropdown>
    </CrumbRightWrapper>
  )
}

export default memo(CrumbRight)
