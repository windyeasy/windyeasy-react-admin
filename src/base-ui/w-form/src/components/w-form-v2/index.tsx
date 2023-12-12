import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { WFormItem, WFormUiConfig } from '../../type'
import { Form } from 'antd'
import { handleConfig } from '../../utils/utils'
import { WFormProxySerive } from '../../service/proxy-serive'

export interface WFromProps {
  children?: ReactNode
  formItems: WFormItem[]
  formname: string
  proxyService?: WFormProxySerive
  uiConfig?: WFormUiConfig
}

const WFormV2: FC<WFromProps> = (props) => {
  const { formItems = [], formname } = props
  const [form] = Form.useForm()
  props.proxyService && props.proxyService.injectForm(form)
  /**
   * 处理初始化值
   */
  const initialValues: any = {}
  for (const formItem of formItems) {
    if (!formItem.defaultValueUn) {
      initialValues[formItem.prop] = formItem.initValue ?? ''
    }
  }
  /**
   *
   * 使用items： 创建模板，实现搜索功能
   */
  return (
    <>
      <Form
        form={form}
        {...handleConfig(props?.uiConfig?.formConfig)}
        initialValues={initialValues}
        name={formname}
      >
        {props.children && props.children}
      </Form>
    </>
  )
}

export default memo(WFormV2)
