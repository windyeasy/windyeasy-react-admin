import { ColumnType } from 'antd/lib/table'

import type { AxiosRequestConfig } from 'axios'
export interface WColumType<T = unknown, WT = string> extends ColumnType<T> {
  type?: WT
}
export interface ExtendPropType {
  type: string
  render: ColumnType<any>['render']
}
export interface RequestConfig {
  method?: AxiosRequestConfig['method']
  pageName?: string
  sizeName?: string
}
export interface RsponseConfig {
  dataIndex: string
  totalIndex: string
}
