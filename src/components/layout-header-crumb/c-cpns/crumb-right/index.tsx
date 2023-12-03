import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CrumbRightWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const CrumbRight: FC<IProps> = () => {
  return <CrumbRightWrapper>crumbRight</CrumbRightWrapper>
}

export default memo(CrumbRight)
