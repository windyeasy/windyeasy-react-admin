import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DemoWrapper } from './style'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker
interface IProps {
  children?: ReactNode
}

const Demo: FC<IProps> = () => {
  const handleDateChange = (values: any) => {
    console.log(values[0].toDate())
  }
  return (
    <DemoWrapper>
      {/* 时间选择demo演示 */}
      <RangePicker onChange={handleDateChange} />
    </DemoWrapper>
  )
}

export default memo(Demo)
