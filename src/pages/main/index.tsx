import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { MainWrapper } from './style'
// import { LayoutTopHeader } from '@/layout'
import { LayoutLeftMenu } from '@/layout'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  return (
    <MainWrapper>
      <LayoutLeftMenu />
      {/* <LayoutTopHeader /> */}
    </MainWrapper>
  )
}

export default memo(Main)
