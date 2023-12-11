import { ExtendFormItem, VisibleIfInfoType, VisibleIfType } from '../type'

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
// visibleIf diff
export function visibleIfDiff(visibleIf: VisibleIfType, formData: any) {
  if (Object.keys(visibleIf).length) {
    const { hidden, show } = visibleIf
    if (hidden && show) {
      new Error('visibleIf Error: hidden和show不能同时存在 ')
      return true
    }
    if (hidden && Object.keys(hidden).length) {
      const keys = Object.keys(hidden)
      for (const key of keys) {
        // 到数据发生改变，需要隐藏表单，就隐藏表单
        if (formData[key] === hidden[key]) {
          return false
        }
      }
      return true
    }
    if (show && Object.keys(show).length) {
      const keys = Object.keys(show)
      for (const key of keys) {
        // 到数据发生改变，需要隐藏表单，就隐藏表单
        if (formData[key] === show[key]) {
          return true
        } else {
          return false
        }
      }
    }
  }
  return true
}

// 递归查询值否存在
export function visibleIfInfoDiffByKey(modifyValue: any, visibleIfInfo: VisibleIfInfoType) {
  const key = Object.keys(modifyValue)[0]
  const keys = Object.keys(visibleIfInfo)
  for (const newKey of keys) {
    const { show, hidden } = visibleIfInfo[newKey]
    if (hidden && hidden[key]) {
      return true
    }
    if (show && show[key]) {
      return true
    }
  }
  return false
}
