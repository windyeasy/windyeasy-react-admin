import request from '@/services'

export function postUserList(queryInfo: any = { offset: 0, size: 10 }) {
  return request.post({
    url: '/users/list',
    data: queryInfo
  })
}
// 根据id删除用户
export function deleteUserById(id: number) {
  return request.delete({
    url: '/users/' + id
  })
}

// 添加创建用户
export function createUserData(userInfo: any) {
  return request.post({
    url: '/users',
    data: userInfo
  })
}

// 编辑用户
export function editUserData(id: number, userInfo: any) {
  return request.patch({
    url: '/users/' + id,
    data: userInfo
  })
}
