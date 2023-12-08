import React, { memo, useEffect } from 'react'
import { FC, ReactNode, useState } from 'react'
import { Button, Col, Form, Input, Modal, Row, Select } from 'antd'

import { UserModalWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { changeIsModalOpenAction, fetchUserListAction } from '../../store'
import type { DefaultOptionType } from 'antd/es/select'
import { getEntireDepartments, getEntireRoles } from '@/services/main/system'
import { createUserData, editUserData } from '../../service'

interface IProps {
  children?: ReactNode
}

const UserModal: FC<IProps> = () => {
  const { isModalOpen, isModalNew, modalTitle, editInfo } = useAppSelector(
    (state) => ({
      isModalOpen: state.user.isModalOpen,
      isModalNew: state.user.isModalNew,
      modalTitle: state.user.modalTitle,
      editInfo: state.user.editUserInfo
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()
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
  const handleCancel = () => {
    form.resetFields()
    dispatch(changeIsModalOpenAction(false))
  }
  const searchSubmit = (values: any) => {
    if (isModalNew) {
      createUserData(values).then((res) => {
        if (res.code === 0) {
          console.log('创建用户成功！')
          dispatch(fetchUserListAction())
        } else {
          console.log('创建用户失败！', res.message)
        }
      })
    } else {
      editUserData(editInfo.id, values).then((res) => {
        if (res.code === 0) {
          console.log('编辑用户成功')
          dispatch(fetchUserListAction())
          return
        }
        console.log('编辑用户失败', res.message)
      })
    }

    dispatch(changeIsModalOpenAction(false))
  }
  const [rolesOptions, setRolesOptions] = useState<DefaultOptionType[]>([])
  const [depsOptions, setDepsOptions] = useState<DefaultOptionType[]>([])
  // 处理modal被打开时的功能
  useEffect(() => {
    // 当isModalOpen发生变化时，处理时编辑还是添加
    if (isModalOpen) {
      if (!isModalNew) {
        const newInitValues: any = {}
        for (const key in initialValues) {
          newInitValues[key] = editInfo[key]
        }
        form.setFieldsValue(newInitValues)
      }
    }
  }, [isModalOpen])
  // 副作用功能
  useEffect(() => {
    getEntireRoles().then((res) => {
      if (res.data && res.data.list) {
        const roles = res.data.list.map((item: any) => ({
          value: item.id,
          label: item.name
        }))
        setRolesOptions(roles)
      }
    })

    getEntireDepartments().then((res) => {
      if (res.data && res.data.list) {
        const deps = res.data.list.map((item: any) => ({
          value: item.id,
          label: item.name
        }))
        setDepsOptions(deps)
      }
    })
  }, [])

  return (
    <UserModalWrapper>
      <Modal
        title={
          <div
            className="title"
            style={{ fontWeight: 'normal', fontSize: '18px', textAlign: 'center' }}
          >
            {modalTitle}
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
          name="userform"
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
            {isModalNew && (
              <Col span={24}>
                <Form.Item label="登录密码" name="password">
                  <Input.Password placeholder="请输入登录密码" />
                </Form.Item>
              </Col>
            )}

            <Col span={24}>
              <Form.Item label="手机号码" name="cellphone">
                <Input placeholder="请输入手机号码" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="选择角色" name="roleId">
                <Select placeholder="请选择角色" options={rolesOptions} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="选择部门" name="departmentId">
                <Select placeholder="请选择部门" options={depsOptions} />
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
