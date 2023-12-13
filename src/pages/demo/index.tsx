import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Card from 'antd/es/card/Card'
import { DemoWrapper } from './style'
import { Button, Col, Form, Input, Row } from 'antd'

interface IProps {
  children?: ReactNode
}

const Demo: FC<IProps> = () => {
  const [form] = Form.useForm()

  const initialValues = {
    name: '',
    realname: '',
    cellphone: '',
    password: '',
    roleId: '',
    departmentId: ''
  }

  // 事件处理
  const handleCancel = () => {}
  const searchSubmit = (values: any) => {
    console.log(values)
  }
  return (
    <DemoWrapper>
      <Form
        form={form}
        initialValues={initialValues}
        name="userform"
        onFinish={searchSubmit}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 18 }}
      >
        <Card>
          <Row>
            <Col span={24}>
              <Form.Item label="用户名" name="name">
                <Input placeholder="请输入用户名" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="真实姓名" name="realname">
                <Input placeholder="请输入真实姓名" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="登录密码" name="password">
                <Input.Password placeholder="请输入登录密码" />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row>
            <Col span={24}>
              <Form.Item label="手机号码" name="cellphone">
                <Input placeholder="请输入手机号码" />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center">
            <Form.Item labelCol={{ span: 0 }} wrapperCol={{ span: 24 }}>
              <Button onClick={handleCancel}>取消</Button>
              <Button htmlType="submit" style={{ marginLeft: '10px' }} type="primary">
                确定
              </Button>
            </Form.Item>
          </Row>
        </Card>
      </Form>
    </DemoWrapper>
  )
}

export default memo(Demo)
