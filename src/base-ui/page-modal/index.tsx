import { useAppSelector } from '@/store'
import { Button, Modal, Row } from 'antd'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { usePageModal } from './hooks/usePageModal'
import { PageModalConfig } from './type'
import { WBaseForm } from '../w-form'
import { formPrxoySerive } from '../w-form/src/service/proxy-serive'
export type OnModalSubmitType = (isNew: boolean, values: any, record: any) => void
interface IProps {
  children?: ReactNode
  modalConfig: PageModalConfig
  formname: string
  onSubmit?: OnModalSubmitType
  onCancel?: () => void
}

/**
 * 生成展示数据，添加或者编辑，添加由上层添加，
 * 通过不同的模式确定是请求还是获取数据，通过store管理数据，可以通过hook改变数据
 * 数据请求交由上层处理得到后添加store, 通过store控制展开与关闭
 * 并进行展示
 */
const PageModal: FC<IProps> = (props) => {
  const { changeModalOpen } = usePageModal()
  const { isOpen, formData, isNew } = useAppSelector(
    (state) => ({
      isOpen: state.pageModal.isOpen,
      formData: state.pageModal.formData,
      isNew: state.pageModal.isNew
    }),
    shallowEqual
  )
  // 回调取消函数
  function handleCancel() {
    changeModalOpen(false)
    props.onCancel && props.onCancel()
  }
  // 回调提交函数
  function handleSubmit() {
    changeModalOpen(false)
    let values = formPrxoySerive.form?.getFieldsValue()
    /*
     * 执行提交隐式处理功能
     */
    values = formPrxoySerive.execFns(values)
    props.onSubmit && props.onSubmit(isNew, values, formData)
  }
  // 副作用代码
  useEffect(() => {
    // 如果对象有值就，设置表单初始值
    if (Object.keys(formData).length) {
      const formItmes = props.modalConfig.formItmes
      const length = formItmes.length
      const initValues: any = {}
      for (let i = 0; i < length; i++) {
        const item = formItmes[i]
        initValues[item.prop] = formData[item.prop] ?? (item.initValue ? item.initValue : '')
      }
      console.log(initValues)
      formPrxoySerive.form?.setFieldsValue(initValues)
    }
  }, [formData])
  return (
    <Modal
      title={
        <div
          className="title"
          style={{ fontWeight: 'normal', fontSize: '18px', textAlign: 'center' }}
        >
          {isNew ? props.modalConfig.header.newTitle : props.modalConfig.header.editTitle}
        </div>
      }
      width={'30%'}
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <WBaseForm
        proxyService={formPrxoySerive}
        formname={props.formname}
        formItems={props.modalConfig.formItmes}
      />
      <Row justify="center">
        <Button onClick={handleCancel}>取消</Button>
        <Button onClick={handleSubmit} style={{ marginLeft: '10px' }} type="primary">
          确定
        </Button>
      </Row>
    </Modal>
  )
}

export default memo(PageModal)
