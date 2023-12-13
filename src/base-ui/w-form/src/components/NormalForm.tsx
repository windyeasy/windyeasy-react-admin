import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const NormalForm: FC<IProps> = () => {
  return <div>NormalForm</div>
}

export default memo(NormalForm)
