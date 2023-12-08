import { ColumnType } from 'antd/lib/table'

export interface WColumType<T = unknown, WT = string> extends ColumnType<T> {
  type?: WT
}
export interface ExtendPropType {
  type: string
  render: ColumnType<any>['render']
}
