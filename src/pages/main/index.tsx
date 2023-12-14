import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import ChangeThemeDrawer from '@/components/change-theme-drawer'
import { MainWrapper } from './style'
import { LayoutTopHeader } from '@/layout'
// import { LayoutLeftMenu } from '@/layout'
import { useAntToken } from '@/hooks/useAntToken'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  const { token } = useAntToken()
  return (
    <MainWrapper $borderColor={token.colorSplit}>
      {/* <LayoutLeftMenu /> */}
      <LayoutTopHeader />
      <ChangeThemeDrawer />
    </MainWrapper>
  )
}

export default memo(Main)
