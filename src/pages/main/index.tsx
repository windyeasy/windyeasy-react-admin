import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import ChangeThemeDrawer from '@/components/change-theme-drawer'
import { MainWrapper } from './style'
import { LayoutTopHeader } from '@/layout'
import { LayoutLeftMenu } from '@/layout'
import { useAntToken } from '@/hooks/useAntToken'
import { LayoutMode } from '@/store/theme'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  const { token } = useAntToken()
  const { themeConfig } = useAppSelector(
    (state) => ({
      themeConfig: state.theme.themeConfig
    }),
    shallowEqual
  )
  function switchLayoutMode(mode: LayoutMode) {
    switch (mode) {
      case 'leftSider':
        return <LayoutLeftMenu />
      case 'topHeader':
        return <LayoutTopHeader />
      default:
        return ''
    }
  }
  return (
    <MainWrapper $borderColor={token.colorSplit}>
      {/* <LayoutLeftMenu /> */}
      {switchLayoutMode(themeConfig.layoutMode)}
      <ChangeThemeDrawer />
    </MainWrapper>
  )
}

export default memo(Main)
