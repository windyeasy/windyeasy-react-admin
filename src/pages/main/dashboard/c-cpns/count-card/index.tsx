import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CountCardWrapper } from './style'
import { WarningOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { formatShowNumber } from '@/utils/format'

interface IProps {
  children?: ReactNode
  title: string
  tips?: string
  number1?: number
  number2?: number
  subtitle?: string
  amount?: string
}

const CountCard: FC<IProps> = (props) => {
  const { title, number1 = 0, number2 = 0, subtitle = title, tips, amount = '' } = props

  return (
    <CountCardWrapper
      style={{
        backgroundColor: '#fff'
      }}
    >
      <div className="count-card-header">
        <div className="header-title">{title}</div>
        <i className="header-title">
          <Tooltip placement="top" title={tips}>
            <WarningOutlined />
          </Tooltip>
        </i>
      </div>
      <div className="count-card-content">{amount + formatShowNumber(number1)}</div>
      <div className="count-card-footer">
        {subtitle}
        {amount + formatShowNumber(number2)}
      </div>
    </CountCardWrapper>
  )
}

export default memo(CountCard)
