import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import type { WFormItem, WFormPublicProps } from './type'
import WForm from './core/index'
import { WFormProxySerive } from './service/proxy-serive'
import { WFormItemType, extendFormItems } from './templates'

export interface WBaseFormProps extends WFormPublicProps {
  children?: ReactNode
  proxyService?: WFormProxySerive
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
