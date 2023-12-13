import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { MainWrapper } from './style'
// import { LayoutTopHeader } from '@/layout'
import { LayoutLeftMenu } from '@/layout'
import { SettingOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  return (
    <MainWrapper>
      <LayoutLeftMenu />
      {/* <LayoutTopHeader /> */}
      {/* 设置主题样式按钮 */}
      <div className="set-theme">
        <SettingOutlined />
      </div>
    </MainWrapper>
  )
}

export default memo(Main)
