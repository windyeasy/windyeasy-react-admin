import type { ReactNode } from 'react'
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
  visibleIf?: any
  [key: string]: any // 添加使用别的类型进行扩展
}

export interface ExtendFormItem<T = WFormItem> {
  type: string // 'input'
  render: (formItem: T) => ReactNode
}
