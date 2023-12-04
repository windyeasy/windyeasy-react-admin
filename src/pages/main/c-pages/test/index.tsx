import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Test: FC<IProps> = () => {
  return <div>Test</div>
}

export default memo(Test)
