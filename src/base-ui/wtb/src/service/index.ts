import request from '@/services'
import type { AxiosRequestConfig } from 'axios'

export function getPageList(
  url: string,
  method: AxiosRequestConfig['method'],
  serachInfo: any = {}
) {
  return request.post({
    url,
    method,
    data: serachInfo
  })
}
