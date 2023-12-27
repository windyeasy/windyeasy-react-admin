import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { DemoWrapper } from './style'
import Modal from 'antd/lib/modal/Modal'

interface IProps {
  children?: ReactNode
}
function Test() {
  useEffect(() => {
    return () => {
      console.log('子组件被卸载')
    }
  })
  return <>子组件</>
}
const Demo: FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    return () => {
      console.log('组件被卸载了')
    }
  })
  return (
    <DemoWrapper>
      <Modal
        open={isOpen}
        onCancel={() => {
          setIsOpen(false)
        }}
      >
        <Test />
      </Modal>
    </DemoWrapper>
  )
}

export default memo(Demo)
