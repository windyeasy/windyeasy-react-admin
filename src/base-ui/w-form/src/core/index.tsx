import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ExtendFormItem, VisibleIfInfoType, WFormItem, WFormUiConfig } from '../type'
import { Col, Form, Row } from 'antd'
import {
  handleConfig,
  mapTypeIndexToRender,
  visibleIfDiff,
  visibleIfInfoDiffByKey
} from '../utils/utils'
import { WFormProxySerive } from '../service/proxy-serive'

export interface WFromProps {
  children?: ReactNode
  formItems: WFormItem[]
  extendFormItems: ExtendFormItem<any>[]
  formname: string
  proxyService?: WFormProxySerive
  uiConfig?: WFormUiConfig
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
  }
  /**
   * 通过映射处理，扩展内容
   */
  const formItemsInfo = mapTypeIndexToRender(extendFormItems)

  /**
   * 实现visibleIf 功能
   */
  const visibleIfInfo = useRef<VisibleIfInfoType>({})
  const [formData, setFormData] = useState<any>({})
  const handleValuesChange = (modifyValue: any, allValues: any) => {
    // 通过判断减少更新次数
    if (visibleIfInfoDiffByKey(modifyValue, visibleIfInfo.current)) {
      setFormData(allValues)
    }
  }
  function handleFormItems() {
    const renderArray: any = []
    const length = formItems.length
    for (let i = 0; i < length; i++) {
      const item = formItems[i]
      if (item.handleParams && props.proxyService) {
        props.proxyService.addFn(item.handleParams)
      }

      if (item.visibleIf && Object.keys(item.visibleIf).length) {
        // 判断visibleIf是否存，添加比对，当已经存储就不再存储,减少更新次数
        if (!visibleIfInfo.current[item.prop]) {
          visibleIfInfo.current[item.prop] = item.visibleIf
          console.log('进入了', 'vit')
        }
        if (!visibleIfDiff(item.visibleIf, formData)) {
          continue
        }
      }
      renderArray.push(
        <Col
          span={24}
          {...handleConfig(props.uiConfig?.colConfig)}
          {...handleConfig(item.colConfig)}
          key={item.prop}
        >
          {formItemsInfo[item.type](item)}
        </Col>
      )
    }
    return renderArray
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
        onValuesChange={handleValuesChange}
      >
        <Row>
          {handleFormItems()}
          {props.children && props.children}
        </Row>
      </Form>
    </>
  )
}

export default memo(WForm)
