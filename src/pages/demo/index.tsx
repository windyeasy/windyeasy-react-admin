import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DemoWrapper } from './style'
import { WBaseForm } from '@/base-ui/w-form'
import { groupsFormConfig } from './config'

interface IProps {
  children?: ReactNode
}

const Demo: FC<IProps> = () => {
  return (
    <DemoWrapper>
      <WBaseForm {...groupsFormConfig} />
    </DemoWrapper>
  )
}

export default memo(Demo)
