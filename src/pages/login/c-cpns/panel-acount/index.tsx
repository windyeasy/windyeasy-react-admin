import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PanelAcountWrapper } from './style'
import { Button, Form, Input } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginAcount } from '../../service/type'
import useMessage from 'antd/es/message/useMessage'

export interface OnSubmitType<T = LoginAcount> {
  (values: T): void
}
interface IProps {
  children?: ReactNode
  onSubmit: OnSubmitType
}

const PanelAcount: FC<IProps> = (props) => {
  const [messageApi, contextHolder] = useMessage()
  const { onSubmit } = props
  function handleFinish(values: LoginAcount) {
    onSubmit(values)
  }
  function handleForgotPassword() {
    messageApi.info('请联系管理员')
  }
  return (
    <PanelAcountWrapper>
      {contextHolder}
      <Form
        size="large"
        name="acount-form"
        initialValues={{ name: 'coderwhy', password: '123456' }}
        onFinish={handleFinish}
      >
        <FormItem name="name" rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
        </FormItem>
        <FormItem name="password" rules={[{ required: true, message: '请输入用户密码!' }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder="请输入密码" />
        </FormItem>
        <FormItem className="fogot-password">
          <a onClick={handleForgotPassword}>忘记密码</a>
        </FormItem>
        <FormItem>
          <Button type="primary" className="login-btn" htmlType="submit">
            立即登录
          </Button>
        </FormItem>
      </Form>
    </PanelAcountWrapper>
  )
}

export default memo(PanelAcount)
