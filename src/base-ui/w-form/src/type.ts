import type { ColProps, FormProps } from 'antd'
import type { Rule } from 'antd/es/form'
import type { ReactNode } from 'react'
type AnyObject = {
  [index: string]: any
}
export interface VisibleIfType {
  hidden?: AnyObject
  show?: AnyObject
}
export interface VisibleIfInfoType {
  [index: string]: VisibleIfType
}
export interface WFormItem<T = string> {
  type: T
  prop: string
  label?: string
  initValue?: any
  colConfig?: any
  defaultValueUn?: boolean // 默认值是否未定义
  handleHidden?: any // 通过条件处理隐藏
  // 隐式处理参数
  handleParams?: (values: any) => any
  rules?: Rule[]
  visibleIf?: VisibleIfType
  render?: (formItem: WFormItem) => ReactNode
  [key: string]: any // 添加使用别的类型进行扩展
}

export interface ExtendFormItem<T = WFormItem> {
  type: string // 'input'
  render: (formItem: T) => ReactNode
}

export interface WFormUiConfig {
  formConfig?: FormProps
  colConfig?: ColProps
}
