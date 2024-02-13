import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BaseEchart } from '@/base-ui/page-echars'
import type { EChartsOption } from 'echarts'
interface IProps {
  children?: ReactNode
}

const RoseEchart: FC<IProps> = () => {
  const [option, setOption] = useState<EChartsOption>({})

  useEffect(() => {
    const option: EChartsOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        top: 'bottom'
      },
      series: [
        {
          name: '占比统计',
          type: 'pie',
          radius: [20, 100],
          center: ['50%', '50%'],
          roseType: 'radius',
          itemStyle: {
            borderRadius: 5
          },
          label: {
            show: false
          },
          data: [
            { value: 66666, name: '总下载数' },
            { value: 44444, name: '总成交数' },
            { value: 25982, name: '总收藏数' }
          ]
        }
      ]
    }

    setOption(option)
  }, [])
  return <BaseEchart option={option} />
}

export default memo(RoseEchart)
