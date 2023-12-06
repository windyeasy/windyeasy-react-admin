import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ReloadOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Card, Col, Form, Input, Row, Select } from 'antd'

import { DatePicker } from 'antd'
const { RangePicker } = DatePicker
interface IProps {
  children?: ReactNode
}

const UserSeach: FC<IProps> = () => {
  const [form] = Form.useForm()
  const searchSubmit = (values: any) => {
    console.log(values)
  }
  // 重置
  const onReset = () => {
    form.resetFields()
  }
  return (
    <Card>
      <Form form={form} onFinish={searchSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
        <Row>
          <Col span={8}>
            <Form.Item label="用户名" name="name">
              <Input placeholder="请输入用户名" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="真实姓名" name="realname">
              <Input placeholder="请输入真实姓名" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="手机号码" name="cellphone">
              <Input placeholder="请输入手机号码" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="状态" name="enable">
              <Select
                placeholder="请选择状态"
                options={[
                  { value: 1, label: '启用' },
                  { value: 0, label: '禁用' }
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="创建时间" name="createAt">
              <RangePicker />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Form.Item labelCol={{ span: 0 }} wrapperCol={{ span: 24 }}>
            <Button onClick={onReset} icon={<ReloadOutlined />}>
              重置
            </Button>
            <Button
              htmlType="submit"
              style={{ marginLeft: '10px' }}
              type="primary"
              icon={<SearchOutlined />}
            >
              查询
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Card>
  )
}

export default memo(UserSeach)
