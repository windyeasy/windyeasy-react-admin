import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MainWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  return <MainWrapper>主要页面</MainWrapper>
}

export default memo(Main)
