import { ExtendFormItem } from '../type'

export function handleConfig(config: any) {
  return config ?? {}
}

type FnReturnType = {
  [key in string]: ExtendFormItem['render']
}
// 将拓展类型转换为一个对象，有利于查询读取
export function mapTypeIndexToRender(extendFormItems: ExtendFormItem[]): FnReturnType {
  const obj: FnReturnType = {}
  for (const item of extendFormItems) {
    obj[item.type] = item.render
  }
  return obj
}
