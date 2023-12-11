import React from 'react'
import { DatePicker, Form, Input, Select } from 'antd'
import type { ExtendFormItem } from '../type'
import type { WBaseFormItem } from '..'

type NewExtendFormItem = ExtendFormItem<WBaseFormItem>

const { RangePicker } = DatePicker
export const extendFormItems: NewExtendFormItem[] = [
  {
    type: 'input',
    render: (item) => {
      return (
        <Form.Item label={item.label} name={item.prop}>
          <Input placeholder={item.placeholder} />
        </Form.Item>
      )
    }
  },
  {
    type: 'select',
    render: (item) => {
      return (
        <Form.Item label={item.label} name={item.prop}>
          <Select placeholder={item.placeholder} options={item.options} />
        </Form.Item>
      )
    }
  },
  {
    type: 'rangePicker',
    render: (item) => {
      return (
        <Form.Item label={item.label} name={item.prop}>
          <RangePicker />
        </Form.Item>
      )
    }
  }
]
