import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, Col, Form, Input, Modal, Row, Select } from 'antd'

import { UserModalWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { changeIsModalOpenAction } from '../../store'

interface IProps {
  children?: ReactNode
}

const UserModal: FC<IProps> = () => {
  const { isModalOpen } = useAppSelector(
    (state) => ({
      isModalOpen: state.user.isModalOpen
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()

  const searchSubmit = (values: any) => {
    console.log(values)
    dispatch(changeIsModalOpenAction(false))
  }
  const initialValues = {
    name: '',
    realname: '',
    cellphone: '',
    password: ''
  }

  const handleCancel = () => {
    form.resetFields()
    searchSubmit(form.getFieldsValue())
    dispatch(changeIsModalOpenAction(false))
  }
  return (
    <UserModalWrapper>
      <Modal
        title={
          <div
            className="title"
            style={{ fontWeight: 'normal', fontSize: '18px', textAlign: 'center' }}
          >
            新建用户
          </div>
        }
        width={'30%'}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          initialValues={initialValues}
          onFinish={searchSubmit}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
        >
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
            <Col span={24}>
              <Form.Item label="手机号码" name="cellphone">
                <Input placeholder="请输入手机号码" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="选择角色" name="roleId">
                <Select
                  placeholder="请选择角色"
                  options={[
                    { value: 1, label: '启用' },
                    { value: 0, label: '禁用' }
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="选择部门" name="departmentId">
                <Select
                  placeholder="请选择部门"
                  options={[
                    { value: 1, label: '启用' },
                    { value: 0, label: '禁用' }
                  ]}
                />
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
        </Form>
      </Modal>
    </UserModalWrapper>
  )
}

export default memo(UserModal)
