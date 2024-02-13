import { mockRequest } from '@/services'
import { BaseRequest } from '@/services/type'
export interface ICardCountList {
  id: number
  title: string
  number1: number
  number2: number
  subtitle: string
  tips: string
}
export interface PageViewData {
  date: string
  count: number
}
export function fetchCardCountList() {
  return mockRequest.get<BaseRequest<ICardCountList[]>>({
    url: '/data-count/list'
  })
}
export function fetchPageView() {
  return mockRequest.get<BaseRequest<PageViewData[]>>({
    url: '/data-count/pageView'
  })
}

// 获取区域统计数据
export const areaMapCount = [
  {
    name: '上海',
    value: 62239
  },
  {
    name: '南京',
    value: 55683
  },
  {
    name: '郑州',
    value: 53716
  },
  {
    name: '广州',
    value: 6364
  },
  {
    name: '西安',
    value: 64976
  },
  {
    name: '长沙',
    value: 4142
  },
  {
    name: '昆明',
    value: 9524
  },
  {
    name: '武汉',
    value: 28212
  },
  {
    name: '重庆',
    value: 60777
  },
  {
    name: '沈阳',
    value: 20900
  },
  {
    name: '宁波',
    value: 66584
  },
  {
    name: '苏州',
    value: 1136
  },
  {
    name: '青岛',
    value: 9021
  },
  {
    name: '成都',
    value: 23378
  },
  {
    name: '北京',
    value: 6107
  },
  {
    name: '天津',
    value: 5096
  },
  {
    name: '深圳',
    value: 12480
  },
  {
    name: '杭州',
    value: 19654
  }
]
