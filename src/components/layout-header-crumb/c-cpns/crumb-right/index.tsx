import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CrumbRightWrapper } from './style'
import { Dropdown, MenuProps } from 'antd'
import { localCache } from '@/utils/cache'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { changeIsLoginAction } from '@/pages/login/store'

interface IProps {
  children?: ReactNode
}

const CrumbRight: FC<IProps> = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  function loginOut() {
    // 清除缓存
    localCache.clear()
    // 更改登录状态
    dispatch(changeIsLoginAction(false))
    // 跳转登录页
    navigate('/login')
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a onClick={loginOut}>退出登录</a>
    }
  ]
  return (
    <CrumbRightWrapper>
      <Dropdown menu={{ items }}>
        <a className="user-operate">
          <img
            className="avatar"
            src="https://img2.baidu.com/it/u=1978192862,2048448374&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500"
          />
          <span className="user-name">coderwhy</span>
        </a>
      </Dropdown>
    </CrumbRightWrapper>
  )
}

export default memo(CrumbRight)
