import React from 'react'
import type { ExtendPropType } from '../type'

import { utcFormat } from '@/utils/format'
export const extendProps: ExtendPropType[] = [
  {
    type: 'utcTimer',
    render: (time: string) => {
      return <>{utcFormat(time)}</>
    }
  }
]
