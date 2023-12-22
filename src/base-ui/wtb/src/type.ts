import type { ColumnType } from 'antd/lib/table'

import type { AxiosRequestConfig } from 'axios'
import type { TbType } from '.'
import type { ButtonProps } from 'antd'
export interface WColumType<T = unknown, WT = string> extends ColumnType<T> {
  type?: WT
}
export interface ExtendPropType<T = TbType> {
  type: T
  render: ColumnType<any>['render']
}
export interface RequestConfig {
  method?: AxiosRequestConfig['method']
  pageName?: string
  sizeName?: string
}
export interface ResponseConfig {
  dataIndex: string
  totalIndex: string
}
export interface WTbButtonProps extends ButtonProps {
  text: string
}
