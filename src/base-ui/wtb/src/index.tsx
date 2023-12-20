import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wtb from './core'
import type { WtbProps } from './core'
import type { WColumType } from './type'
import { extendProps } from './templates'

type TbType = 'utcTimer'
export type WBaseType<T = any> = WColumType<T, TbType>[]

interface IProps extends WtbProps {
  children?: ReactNode
  wcolumns: WBaseType
}

const WBaseTable: FC<IProps> = (props) => {
  return (
    <Wtb
      requestConfig={{ method: 'post' }}
      responseConfig={{ dataIndex: 'data.list', totalIndex: 'data.totalCount' }}
      {...props}
      extendProps={extendProps}
    />
  )
}

export default memo(WBaseTable)
