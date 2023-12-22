import { WColumType } from '../type'

export function handleTableColumns(columns: WColumType[]) {
  const newColumns: WColumType[] = []
  for (const column of columns) {
    const newColumn = { ...column }
    // 配置项不需要的节点
    if (column.type) {
      Reflect.deleteProperty(newColumn, 'type')
    }
    // 通过自定义配置项生成节点
    if (column.customConfigRender) {
      newColumn.render = column.customConfigRender(column)
      Reflect.deleteProperty(newColumn, 'customConfigRender')
    }
    newColumns.push(newColumn)
  }
  return newColumns
}
