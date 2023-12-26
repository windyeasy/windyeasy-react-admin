import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DemoWrapper } from './style'

import { DataNode } from 'antd/lib/tree'
// import FormTree from '@/base-ui/w-form/src/components/form-tree'
// import { Tree } from 'antd'
import FormTree from '@/base-ui/w-form/src/components/form-tree'

interface IProps {
  children?: ReactNode
}
const treeData: DataNode[] = [
  {
    title: 'parent',
    key: '0',
    children: [
      {
        title: 'child 1',
        key: '0-0'
      },
      {
        title: 'child 2',
        key: '0-1'
      }
    ]
  },
  {
    title: 'parent2',
    key: '1',
    children: [
      {
        title: 'child 1',
        key: '1-0'
      },
      {
        title: 'child 2',
        key: '1-1'
      }
    ]
  }
]
const Demo: FC<IProps> = () => {
  return (
    <DemoWrapper>
      <FormTree treeData={treeData} defaultSelectedKeys={['0-1']} defaultExpandAll checkable />
    </DemoWrapper>
  )
}

export default memo(Demo)
