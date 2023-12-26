import request from '..'

// 获取全部角色
export function getEntireRoles() {
  return request.get({
    url: '/role'
  })
}

// 获取全部部门
export function getEntireDepartments() {
  return request.get({
    url: '/department'
  })
}
// 获取菜单列表
export function getEntireList() {
  return request.get({
    url: '/menu'
  })
}
