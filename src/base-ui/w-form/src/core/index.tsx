import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ExtendFormItem, WFormItem } from '../type'
import { Col, Form, Row } from 'antd'
import { handleConfig, mapTypeIndexToRender } from '../utils/utils'
import { WFormProxySerive } from '../service/proxy-serive'

export interface WFromProps {
  children?: ReactNode
  formItems: WFormItem[]
  extendFormItems: ExtendFormItem<any>[]
  formname: string
  proxyService?: WFormProxySerive
  uiConfig?: {
    formConfig?: any
    colConfig?: any
  }
}

const WForm: FC<WFromProps> = (props) => {
  const { formItems = [], formname, extendFormItems } = props
  const [form] = Form.useForm()
  props.proxyService && props.proxyService.injectForm(form)
  /**
   * 处理初始化值
   */
  const initialValues: any = {}
  for (const formItem of formItems) {
    if (formItem.initValue || formItem.type !== 'select') {
      initialValues[formItem.prop] = formItem.initValue ?? ''
    }
    // 获取初始化值
  }
  const formItemsInfo = mapTypeIndexToRender(extendFormItems)
  // 提交表单
  // form.validateFields
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
        <Row>
          {formItems.map((item) => {
            if (item.handleParams && props.proxyService) {
              props.proxyService.addFn(item.handleParams)
            }
            return (
              <Col
                span={24}
                {...handleConfig(props.uiConfig?.colConfig)}
                {...handleConfig(item.colConfig)}
                key={item.prop}
              >
                {formItemsInfo[item.type](item)}
              </Col>
            )
          })}
          {props.children && props.children}
        </Row>
      </Form>
    </>
  )
}

export default memo(WForm)
