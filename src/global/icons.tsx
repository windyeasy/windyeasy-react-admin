import React from 'react'
import type { ReactNode } from 'react'
import {
  AppstoreOutlined,
  CalendarOutlined,
  LineChartOutlined,
  LinkedinFilled
} from '@ant-design/icons'

interface MapIconsType {
  [index: string]: ReactNode
}
const mapIcons: MapIconsType = {
  AppstoreOutlined: <AppstoreOutlined />,
  CalendarOutlined: <CalendarOutlined />,
  LineChartOutlined: <LineChartOutlined />,
  LinkedinFilled: <LinkedinFilled />
}

export default mapIcons
