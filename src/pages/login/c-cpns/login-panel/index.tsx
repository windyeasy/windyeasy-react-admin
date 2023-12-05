import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { acountLogin } from '../../service'
import useMessage from 'antd/es/message/useMessage'

import { LoginPanelWrapper } from './style'
import PanelAcount from '../panel-acount'
import type { OnSubmitType } from '../panel-acount'
import { useAppDispatch } from '@/store'
import { handleLoginAction } from '../../store'

interface IProps {
  children?: ReactNode
}

const LoginPanel: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  const [messageApi, contextHolder] = useMessage()

  const handleSubmit: OnSubmitType = (values) => {
    acountLogin(values).then((res) => {
      if (res.code === 0) {
        // 存储token
        dispatch(handleLoginAction(res.data))
        // 获取用户信息
        messageApi.success('登录成功')
      } else {
        messageApi.error(res.message)
      }
    })
  }
  return (
    <LoginPanelWrapper>
      {contextHolder}
      <h2 className="panel-title">windyeasy-react-admin</h2>
      <div className="panel-content">
        <PanelAcount onSubmit={handleSubmit} />
      </div>
    </LoginPanelWrapper>
  )
}

export default memo(LoginPanel)
