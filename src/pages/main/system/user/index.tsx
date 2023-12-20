import { Card } from 'antd/lib'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = () => {
  return (
    <>
      <Card></Card>
    </>
  )
}

export default memo(User)
