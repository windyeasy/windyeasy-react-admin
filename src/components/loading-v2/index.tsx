import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LoadingV2Wrapper } from './style'

interface IProps {
  children?: ReactNode
  width?: string | number
  height?: string | number
}

const LoadingV2: FC<IProps> = () => {
  return (
    <LoadingV2Wrapper>
      <div className="load">loading</div>
    </LoadingV2Wrapper>
  )
}

export default memo(LoadingV2)
