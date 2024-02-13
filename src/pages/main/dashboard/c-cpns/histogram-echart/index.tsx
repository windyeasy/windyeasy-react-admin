import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BaseEchart } from '@/base-ui/page-echars'
import type { EChartsOption } from 'echarts'
interface IProps {
  children?: ReactNode
  dateList: string[]
  countData: number[]
}

const HistogramEchart: FC<IProps> = (props) => {
  const { dateList, countData } = props
  const [option, setOption] = useState<EChartsOption>({})

  useEffect(() => {
    const option: EChartsOption = {
      xAxis: {
        type: 'category',
        data: dateList
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: countData,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    }

    setOption(option)
  }, [dateList, countData])
  return <BaseEchart option={option} />
}

export default memo(HistogramEchart)
