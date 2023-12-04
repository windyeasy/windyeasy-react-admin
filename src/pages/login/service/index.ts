import request from '@/services'
import type { LoginAcount, MenuItemRes } from './type'
import { BaseRequest } from '@/services/type'

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

// 获取菜单信息
export function getMenuByRoleID(id: number) {
  return request.get<BaseRequest<MenuItemRes[]>>({
    url: `/role/${id}/menu`
  })
}
