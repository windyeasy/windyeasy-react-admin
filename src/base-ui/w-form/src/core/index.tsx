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
    if (!formItem.defaultValueUn) {
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
            /**
             * 要实现的功能：
             *  1. 提取出hidden的值
             *      name: '123', 存储，当name: 的值发生变化，change
             *      从新渲染：
             *        formData = {name: '123'}
             *      visibleIfInfo = {
             *        'password': {
             *          hidden: {name: '123'}
             *        }
             *      }
             *    if(visibleIfInfo[item.type]){
             *      const {hidden} = visibleIfInfos[item.type]
             *         const keys = objectKeys(hidden)
             *      if (formData[key] === hidden[key]){
             *          containue
             *       }
             *   }
             *
             *    if(){}
             *         得到name: 的值，
             */

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
