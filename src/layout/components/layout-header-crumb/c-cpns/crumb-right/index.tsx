import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { CrumbRightWrapper } from './style'
import { Dropdown, MenuProps } from 'antd'
import { useAppSelector } from '@/store'
import { useAntToken } from '@/hooks/useAntToken'
import { shallowEqual } from 'react-redux'
import { logOff } from '@/utils/log-off'
import { useMessageApi } from '@/utils/global-ant-proxy'
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import screenfull from 'screenfull'
interface IProps {
  children?: ReactNode
}

const CrumbRight: FC<IProps> = () => {
  const { userInfo } = useAppSelector(
    (state) => ({
      userInfo: state.login.userInfo
    }),
    shallowEqual
  )
  const [isScreenFull, setIsScreenFull] = useState(false)
  function loginOut() {
    logOff()
    useMessageApi()?.success('退出登录成功！')
  }
  const { token } = useAntToken()
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a onClick={loginOut}>退出登录</a>
    }
  ]
  function toggleScreenFull() {
    screenfull.toggle()
    setIsScreenFull(screenfull.isFullscreen)
  }
  useEffect(() => {
    setIsScreenFull(screenfull.isFullscreen)
  }, [])
  return (
    <CrumbRightWrapper>
      <div className="screen-full" onClick={toggleScreenFull}>
        {isScreenFull ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
      </div>
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
