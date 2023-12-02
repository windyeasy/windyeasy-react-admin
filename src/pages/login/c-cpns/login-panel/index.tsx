import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { LoginPanelWrapper } from './style'

import PanelAcount from '../panel-acount'
import type { OnSubmitType } from '../panel-acount'
interface IProps {
  children?: ReactNode
}

const LoginPanel: FC<IProps> = () => {
  const handleSubmit: OnSubmitType = (values) => {
    console.log(values)
  }
  return (
    <LoginPanelWrapper>
      <h2 className="panel-title">windyeasy-react-admin</h2>
      <div className="panel-content">
        <PanelAcount onSubmit={handleSubmit} />
      </div>
    </LoginPanelWrapper>
  )
}

export default memo(LoginPanel)
