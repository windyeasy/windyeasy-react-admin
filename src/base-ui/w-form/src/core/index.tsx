import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ExtendFormItem, VisibleIfInfoType, WFormItem, WFormPublicProps } from '../type'
import { Form } from 'antd'
import {
  handleConfig,
  mapTypeIndexToRender,
  visibleIfDiff,
  visibleIfInfoDiffByKey
} from '../utils/utils'
import GroupsForm from '../components/GroupsForm'
import NormalForm from '../components/NormalForm'

export interface WFromProps extends WFormPublicProps {
  children?: ReactNode
  extendFormItems: ExtendFormItem<any>[]
}

const WForm: FC<WFromProps> = (props) => {
  const { formItems = [], formname, extendFormItems, mode = 'normal', groups = [] } = props
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
    const renderArray: WFormItem[] = []
    const length = formItems.length
    for (let i = 0; i < length; i++) {
      const item = formItems[i]
      // 添加额外处理函数
      if (item.handleParams && props.proxyService) {
        props.proxyService.addFn(item.handleParams)
      }

      if (item.visibleIf && Object.keys(item.visibleIf).length) {
        // 判断visibleIf是否存，添加比对，当已经存储就不再存储,减少更新次数
        if (!visibleIfInfo.current[item.prop]) {
          visibleIfInfo.current[item.prop] = item.visibleIf
        }
        if (!visibleIfDiff(item.visibleIf, formData)) {
          continue
        }
      }
      renderArray.push(item)
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
        {/*

          1. 对分组表单进行过滤处理，
          2. 过滤后在映射，多一个层
        */}
        {mode === 'normal' ? (
          <NormalForm
            formItems={handleFormItems()}
            formItemsInfo={formItemsInfo}
            colConfig={props.uiConfig?.colConfig}
          />
        ) : (
          <GroupsForm
            formItems={handleFormItems()}
            formItemsInfo={formItemsInfo}
            colConfig={props.uiConfig?.colConfig}
            groups={groups}
          />
        )}
      </Form>
    </>
  )
}

export default memo(WForm)
