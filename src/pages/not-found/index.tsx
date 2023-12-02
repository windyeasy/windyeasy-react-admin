import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FoundWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const NotFound: FC<IProps> = () => {
  return <FoundWrapper>页面未找到</FoundWrapper>
}

export default memo(NotFound)
