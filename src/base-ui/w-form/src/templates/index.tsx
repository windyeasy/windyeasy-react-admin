import React, { useState } from 'react'
import { DatePicker, Form, Input, Select } from 'antd'
import type { ExtendFormItem } from '../type'
import type { WBaseFormItem } from '..'

export type WFormItemType = 'input' | 'select' | 'rangePicker' | 'password' | 'custom'
type NewExtendFormItem = ExtendFormItem<WBaseFormItem>

const { RangePicker } = DatePicker
export const extendFormItems: NewExtendFormItem[] = [
  {
    type: 'input',
    render: (item) => {
      return (
        <Form.Item label={item.label} name={item.prop} rules={item.rules}>
          <Input placeholder={item.placeholder} />
        </Form.Item>
      )
    }
  },
  {
    type: 'select',
    render: (item) => {
      const [options, setOptions] = useState(item.options || [])
      if (item.asyncOptions) {
        item.asyncOptions.then((options: any) => {
          setOptions(options)
        })
      }
      return (
        <Form.Item label={item.label} name={item.prop} rules={item.rules}>
          <Select placeholder={item.placeholder} options={options} />
        </Form.Item>
      )
    }
  },
  {
    type: 'rangePicker',
    render: (item) => {
      return (
        <Form.Item label={item.label} name={item.prop} rules={item.rules}>
          <RangePicker />
        </Form.Item>
      )
    }
  },
  {
    type: 'password',
    render: (item) => {
      return (
        <Form.Item label={item.label} name={item.prop}>
          <Input.Password placeholder={item.placeholder} />
        </Form.Item>
      )
    }
  }
]
