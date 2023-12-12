import { Card, Form } from 'antd'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const WFormItem: FC<IProps> = () => {
  return (
    <div>
      <Form>
        <Card>{'<FormItems></FormItems>'}</Card>
      </Form>
    </div>
  )
}

export default memo(WFormItem)
