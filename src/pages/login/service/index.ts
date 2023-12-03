import request from '@/services'
import type { LoginAcount } from './type'

// 登录
export function acountLogin(acount: LoginAcount) {
  return request.post({
    url: '/login',
    data: acount
  })
}

// 获取用户信息
export function getUserInfoByID(id: number) {
  return request.get({
    url: `/users/${id}`
  })
}
