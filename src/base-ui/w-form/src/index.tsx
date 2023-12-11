import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import type { WFormItem } from './type'
import WForm from './core/index'
import { WFormProxySerive } from './service/proxy-serive'
import { extendFormItems } from './templates'

export interface WBaseFormProps {
  children?: ReactNode
  formname: string
  formItems: WFormItem[]
  proxyService?: WFormProxySerive
  uiConfig?: {
    formConfig?: any
    colConfig?: any
  }
}
type WFormItemType = 'input' | 'select' | 'rangePicker' | 'custom'
interface SlectOption {
  label: string
  value: any
}
// WFormItem扩展类型
export interface WBaseFormItem extends WFormItem<WFormItemType> {
  options?: SlectOption[]
  placeholder?: string
}
const WBaseForm: FC<WBaseFormProps> = (props) => {
  return (
    <>
      <WForm extendFormItems={extendFormItems} {...props} />
    </>
  )
}

export default memo(WBaseForm)
