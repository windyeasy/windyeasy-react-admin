import React, { useEffect, useState } from 'react'
import { Cascader, DatePicker, Form, Input, InputNumber, Select, Switch, TreeSelect } from 'antd'
import type { ExtendFormItem } from '../type'
import type { WBaseFormItem } from '..'

export type WFormItemType =
  | 'input'
  | 'select'
  | 'rangePicker'
  | 'password'
  | 'textarea'
  | 'cascader'
  | 'input-number'
  | 'switch'
  | 'tree-select'
  | 'custom'
type NewExtendFormItem = ExtendFormItem<WBaseFormItem>

const { RangePicker } = DatePicker
export const extendFormItems: NewExtendFormItem[] = [
  {
    type: 'input',
    render: (item) => {
      return (
        <Form.Item
          label={item.label}
          name={item.prop}
          labelCol={item.labelCol}
          wrapperCol={item.wrapperCol}
          rules={item.rules}
        >
          <Input placeholder={item.placeholder} />
        </Form.Item>
      )
    }
  },
  {
    type: 'select',
    render: (item) => {
      const [options, setOptions] = useState(item.options || [])
      useEffect(() => {
        if (item.asyncOptions) {
          item.asyncOptions().then((options: any) => {
            setOptions(options)
          })
        }
      }, [item.asyncOptions])
      return (
        <Form.Item
          label={item.label}
          name={item.prop}
          labelCol={item.labelCol}
          wrapperCol={item.wrapperCol}
          rules={item.rules}
        >
          <Select placeholder={item.placeholder} options={options} />
        </Form.Item>
      )
    }
  },
  {
    type: 'rangePicker',
    render: (item) => {
      return (
        <Form.Item
          label={item.label}
          labelCol={item.labelCol}
          wrapperCol={item.wrapperCol}
          name={item.prop}
          rules={item.rules}
        >
          <RangePicker />
        </Form.Item>
      )
    }
  },
  {
    type: 'password',
    render: (item) => {
      return (
        <Form.Item
          label={item.label}
          labelCol={item.labelCol}
          wrapperCol={item.wrapperCol}
          name={item.prop}
        >
          <Input.Password placeholder={item.placeholder} />
        </Form.Item>
      )
    }
  },
  {
    type: 'custom',
    render: (item) => {
      if (item.render) {
        return item.render(item)
      } else {
        return <></>
      }
    }
  },
  {
    type: 'textarea',
    render: (item) => {
      return (
        <Form.Item
          label={item.label}
          labelCol={item.labelCol}
          wrapperCol={item.wrapperCol}
          name={item.prop}
        >
          <Input.TextArea placeholder={item.placeholder} autoSize={item.autoSize} />
        </Form.Item>
      )
    }
  },
  // 级联选择器
  {
    type: 'cascader',
    render: (item) => {
      const [options, setOptions] = useState(item.options || [])
      useEffect(() => {
        if (item.asyncOptions) {
          item.asyncOptions().then((options: any) => {
            setOptions(options)
          })
        }
      }, [item.asyncOptions])
      return (
        <Form.Item
          label={item.label}
          name={item.prop}
          labelCol={item.labelCol}
          wrapperCol={item.wrapperCol}
          rules={item.rules}
        >
          <Cascader placeholder={item.placeholder} options={options} />
        </Form.Item>
      )
    }
  },
  {
    type: 'input-number',
    render: (item) => {
      return (
        <Form.Item
          label={item.label}
          name={item.prop}
          labelCol={item.labelCol}
          wrapperCol={item.wrapperCol}
          rules={item.rules}
        >
          <InputNumber
            placeholder={item.placeholder}
            min={item.min}
            max={item.max}
            defaultValue={item.defaultValue}
          />
        </Form.Item>
      )
    }
  },
  {
    type: 'switch',
    render: (item) => {
      return (
        <Form.Item
          label={item.label}
          name={item.prop}
          labelCol={item.labelCol}
          wrapperCol={item.wrapperCol}
          rules={item.rules}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      )
    }
  },
  // 树选择器
  {
    type: 'tree-select',
    render: (item) => {
      const [options, setOptions] = useState(item.options || [])
      console.log('进入了select')
      useEffect(() => {
        if (item.asyncOptions) {
          item.asyncOptions().then((options: any) => {
            setOptions(options)
          })
        }
      }, [item.asyncOptions])

      return (
        <Form.Item
          label={item.label}
          name={item.prop}
          labelCol={item.labelCol}
          wrapperCol={item.wrapperCol}
          rules={item.rules}
        >
          <TreeSelect
            showSearch
            style={{ width: '100%' }}
            placeholder={item.placeholder}
            allowClear
            treeData={options}
          />
        </Form.Item>
      )
    }
  }
]
