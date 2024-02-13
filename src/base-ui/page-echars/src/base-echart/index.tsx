import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { transformSize } from '@/utils/transform-size'
interface IProps {
  children?: ReactNode
  width?: number | string
  height?: number | string
  option?: EChartsOption
}

const BaseEachart: FC<IProps> = (props) => {
  const { width = '100%', height = 300, option = {} } = props

  // 定义el节点
  const el = useRef<HTMLDivElement>(null)
  const chartRef = useRef<echarts.ECharts | null>(null)
  // 初始实例化
  useEffect(() => {
    const chart = echarts.init(el.current)
    chartRef.current = chart
    chart.setOption(option)
    // 窗口尺寸发生变化，更新chart的大小
    function autoChangeChart() {
      chart.resize()
    }
    window.addEventListener('resize', autoChangeChart)
    return () => {
      window.removeEventListener('resize', autoChangeChart)
    }
  }, [])
  // 当数据发生改变
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.setOption(option)
    }
  }, [option])
  return <div ref={el} style={{ width: transformSize(width), height: transformSize(height) }}></div>
}

export default memo(BaseEachart)
