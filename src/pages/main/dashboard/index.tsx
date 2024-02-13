import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { DashboardWrapper } from './style'
import CountCard from './c-cpns/count-card'
import { Col, Row } from 'antd'
import ChartCard from './c-cpns/chart-card'
import { ICardCountList, areaMapCount, fetchCardCountList, fetchPageView } from './service'
import HistogramEchart from './c-cpns/histogram-echart'
import RoseEchart from './c-cpns/rose-echart'
import MapEchart from '@/base-ui/page-echars/src/map-echart'

interface IProps {
  children?: ReactNode
}
interface IHistogramData {
  dateList: string[]
  countData: number[]
}
const Dashboard: FC<IProps> = () => {
  const [cardCountList, setCardCountList] = useState<ICardCountList[]>([])
  const [histogramData, setHistogramData] = useState<IHistogramData>({
    dateList: [],
    countData: []
  })
  useEffect(() => {
    fetchCardCountList().then((res) => {
      const { data } = res
      setCardCountList(data)
    })
    fetchPageView().then((res) => {
      const { data } = res
      const dateList: string[] = []
      const countData: number[] = []
      for (const item of data) {
        dateList.push(item.date)
        countData.push(item.count)
      }

      const histogramData = {
        dateList,
        countData
      }
      console.log(histogramData)
      setHistogramData(histogramData)
    })
  }, [])
  return (
    <DashboardWrapper>
      <div className="dashboard-header">
        <Row gutter={10}>
          {cardCountList.map((item) => {
            return (
              <Col span={6} key={item.id}>
                <CountCard {...item} />
              </Col>
            )
          })}
        </Row>
      </div>
      <div className="dashboard-content">
        <Row gutter={10}>
          <Col span={10}>
            <ChartCard title="访问量统计(柱状图)">
              <HistogramEchart {...histogramData} />
            </ChartCard>
          </Col>
          <Col span={8}>
            <ChartCard title="不同城市访问统计">
              <MapEchart mapData={areaMapCount} />
            </ChartCard>
          </Col>
          <Col span={6}>
            <ChartCard title="占比统计（玫瑰图）">
              <RoseEchart />
            </ChartCard>
          </Col>
        </Row>
        <Row gutter={10} style={{ marginTop: '10px' }}>
          <Col span={12}>
            <ChartCard title="分类商品的销量">测试</ChartCard>
          </Col>
          <Col span={12}>
            <ChartCard title="分类商品的收藏">测试</ChartCard>
          </Col>
        </Row>
      </div>
    </DashboardWrapper>
  )
}

export default memo(Dashboard)
