import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { WBaseFormProps } from '..'
import WBaseForm from '../index'
import { formPrxoySerive } from '../service/proxy-serive'
import { Button, Row } from 'antd'
import { ReloadOutlined, SearchOutlined } from '@ant-design/icons'
interface IProps extends WBaseFormProps {
  children?: ReactNode
  onSubmit?: (values: any) => void
  onReset?: () => void
}

const SearchForm: FC<IProps> = (props) => {
  function onSubmit() {
    let values = formPrxoySerive.form?.getFieldsValue()
    /*
     * 执行提交隐式处理功能
     *
     */
    values = formPrxoySerive.execFns(values)
    props.onSubmit && props.onSubmit(values)
  }
  function onReset() {
    formPrxoySerive.form?.resetFields()
    onSubmit()
  }
  return (
    <div>
      <WBaseForm
        proxyService={formPrxoySerive}
        formname={props.formname}
        formItems={props.formItems}
        uiConfig={{
          formConfig: {
            labelCol: { span: 8 },
            wrapperCol: { span: 14 }
          },
          colConfig: {
            span: 8
          }
        }}
      />
      <Row justify="end">
        <Button onClick={onSubmit} type="primary" icon={<SearchOutlined />}>
          查询
        </Button>
        <Button style={{ marginLeft: '10px' }} onClick={onReset} icon={<ReloadOutlined />}>
          重置
        </Button>
      </Row>
    </div>
  )
}

export default memo(SearchForm)
