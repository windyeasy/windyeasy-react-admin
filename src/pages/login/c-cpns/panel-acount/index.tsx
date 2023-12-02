import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PanelAcountWrapper } from './style'
import { Button, Form, Input } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

export interface LoginAcountFormData {
  username: string
  password: string
}
export interface OnSubmitType<T = LoginAcountFormData> {
  (values: T): void
}
interface IProps {
  children?: ReactNode
  onSubmit: OnSubmitType
}

const PanelAcount: FC<IProps> = (props) => {
  const { onSubmit } = props
  function handleFinish(values: LoginAcountFormData) {
    onSubmit(values)
  }

  return (
    <PanelAcountWrapper>
      <Form size="large" name="acount-form" onFinish={handleFinish}>
        <FormItem name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
        </FormItem>
        <FormItem name="password" rules={[{ required: true, message: '请输入用户密码!' }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder="请输入密码" />
        </FormItem>
        <FormItem className="fogot-password">
          <a href="#/">忘记密码</a>
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
