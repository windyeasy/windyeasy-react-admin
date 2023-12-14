import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ThemeDrawerWrapper } from './style'
import { SettingOutlined } from '@ant-design/icons'
import { Divider, Drawer, Switch } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { changeThemeConfigAction } from '@/store/theme'
import { localCache } from '@/utils/cache'
import { CACHE_THEME_CONFIG } from '@/store/theme/constants'
import { useAntToken } from '@/hooks/useAntToken'
import Cell from '../cell'
interface IProps {
  children?: ReactNode
}

const ChangeThemeDrawer: FC<IProps> = () => {
  const [open, setOpen] = useState(false)
  const { token } = useAntToken()
  const { themeConfig } = useAppSelector(
    (state) => ({
      themeConfig: state.theme.themeConfig
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()
  function onClose() {
    setOpen(false)
  }
  function onOpen() {
    setOpen(true)
  }
  function changeMode() {
    const newThemeConfig = { ...themeConfig }
    newThemeConfig.isDark = !newThemeConfig.isDark
    dispatch(changeThemeConfigAction(newThemeConfig))
    localCache.setCache(CACHE_THEME_CONFIG, newThemeConfig)
  }
  return (
    <ThemeDrawerWrapper>
      {/* 设置主题样式按钮 */}
      <div
        className="set-theme"
        style={{
          backgroundColor: token.colorPrimary
        }}
        onClick={onOpen}
      >
        <SettingOutlined />
      </div>
      <Drawer title="布局配置" placement="right" onClose={onClose} open={open}>
        <div className="wrap">
          <Divider>主题模式</Divider>
          <Cell
            title="深色模式"
            cellRight={<Switch onChange={changeMode} defaultChecked={themeConfig.isDark} />}
          />
        </div>
      </Drawer>
    </ThemeDrawerWrapper>
  )
}

export default memo(ChangeThemeDrawer)
