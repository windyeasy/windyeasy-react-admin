import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DemoWrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Demo: FC<IProps> = () => {
  return (
    <DemoWrapper>
      <Link to="http://www.baidu.com" target="_blank">
        百度
      </Link>
    </DemoWrapper>
  )
}

export default memo(Demo)
