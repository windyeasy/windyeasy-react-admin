import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wtb from './core'
import { WtbProps } from './core'
import { ExtendPropType, WColumType } from './type'
import { utcFormat } from '@/utils/format'

type TbType = 'utcTimer'
export type WColumsType<T = any> = WColumType<T, TbType>[]

interface IProps extends WtbProps {
  children?: ReactNode
  wcolums: WColumsType
}

const CustomTable: FC<IProps> = (props) => {
  const extendProps: ExtendPropType[] = [
    {
      type: 'utcTimer',
      render: (time: string) => {
        return <>{utcFormat(time)}</>
      }
    }
  ]
  return <Wtb {...props} extendProps={extendProps} />
}

export default memo(CustomTable)
