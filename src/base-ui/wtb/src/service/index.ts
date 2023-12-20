import request from '@/services'
import type { AxiosRequestConfig } from 'axios'

export function getPageList(
  url: string,
  method: AxiosRequestConfig['method'],
  searchInfo: any = {}
) {
  return request.request({
    url,
    method,
    data: searchInfo
  })
}
