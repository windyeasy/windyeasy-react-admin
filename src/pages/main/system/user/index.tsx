import { WBaseTable } from '@/base-ui/wtb'
import { Card } from 'antd/lib'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { tableConfig } from './config/table.config'

interface IProps {
  children?: ReactNode
}

const User: FC<IProps> = () => {
  return (
    <>
      <Card>
        <WBaseTable {...tableConfig} />
      </Card>
    </>
  )
}

export default memo(User)
