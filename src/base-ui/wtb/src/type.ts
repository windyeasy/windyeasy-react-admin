import type { ColumnType } from 'antd/lib/table'

import type { AxiosRequestConfig } from 'axios'
import type { TbType } from '.'
import type { ButtonProps, PopconfirmProps } from 'antd'

export interface WColumType<T = any, WT = string> extends ColumnType<T> {
  type?: WT
  buttons?: WTbButtonProps[]

  customConfigRender?: (config: WColumType) => ColumnType<T>['render']
}
export interface ExtendPropType<T = TbType> {
  type: T
  render?: ColumnType<any>['render']
  customConfigRender?: (config: WColumType) => ColumnType<T>['render']
}
export interface RequestConfig {
  method?: AxiosRequestConfig['method']
  pageName?: string
  sizeName?: string
}
export interface ResponseConfig {
  dataIndex: string
  totalIndex?: string
}
export interface WTbButtonProps extends ButtonProps {
  text: string
  click?: (record: any) => void
  popConfirmProps?: PopconfirmProps
}
