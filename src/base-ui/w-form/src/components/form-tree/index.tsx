import { Tree } from 'antd'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import type { TreeProps } from 'antd/es/tree'
type TreeValue = string[] | number[]
interface IProps extends TreeProps {
  children?: ReactNode
  value?: TreeValue
  onChange?: (checkedKeys: any) => void
}

const FormTree: FC<IProps> = (props) => {
  const { value, onChange } = props
  const treeProps = { ...props }
  Reflect.deleteProperty(treeProps, 'value')
  Reflect.deleteProperty(treeProps, ' onChange')
  const handleCheck: TreeProps['onCheck'] = (checkedKeys) => {
    onChange && onChange(checkedKeys)
  }
  return <Tree {...treeProps} onCheck={handleCheck} checkedKeys={value} />
}
export default memo(FormTree)
