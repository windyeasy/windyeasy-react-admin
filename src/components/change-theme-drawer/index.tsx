import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ThemeDrawerWrapper } from './style'
import { SettingOutlined } from '@ant-design/icons'
import { Divider, Drawer } from 'antd'
interface IProps {
  children?: ReactNode
}

const ChangeThemeDrawer: FC<IProps> = () => {
  const [open, setOpen] = useState(false)
  function onClose() {
    setOpen(false)
  }
  function onOpen() {
    setOpen(true)
  }
  return (
    <ThemeDrawerWrapper>
      {/* 设置主题样式按钮 */}
      <div className="set-theme" onClick={onOpen}>
        <SettingOutlined />
      </div>
      <Drawer title="布局配置" placement="right" onClose={onClose} open={open}>
        <div className="wrap">
          <Divider>主题模式</Divider>
          <div className="theme-mode">
            <button>月亮</button>
          </div>
        </div>
      </Drawer>
    </ThemeDrawerWrapper>
  )
}

export default memo(ChangeThemeDrawer)
