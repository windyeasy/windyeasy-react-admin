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
