import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { Card } from 'antd'

interface IProps {
  children?: ReactNode
  title: string
}

const ChartCard: FC<IProps> = (props) => {
  const { title } = props
  return (
    <Card title={title} bordered={false}>
      {props.children}
    </Card>
  )
}

export default memo(ChartCard)
