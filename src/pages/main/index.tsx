import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { MainWrapper } from './style'
import { LayoutLeftMenu } from '@/layout'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  return (
    <MainWrapper>
      <LayoutLeftMenu />
    </MainWrapper>
  )
}

export default memo(Main)
