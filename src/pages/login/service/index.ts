import request from '@/services'
import type { LoginAccount, MenuItemRes } from './type'
import { BaseRequest } from '@/services/type'

// 登录
export function accountLogin(account: LoginAccount) {
  return request.post({
    url: '/login',
    data: account
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
