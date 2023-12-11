import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import type { WFormItem } from './type'
import WForm from './core/index'
import { WFormProxySerive } from './service/proxy-serive'
import { WFormItemType, extendFormItems } from './templates'

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
interface SlectOption {
  label: string
  value: any
}

// WFormItem扩展类型
export interface WBaseFormItem extends WFormItem<WFormItemType> {
  options?: SlectOption[]
  asyncOptions?: any
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
