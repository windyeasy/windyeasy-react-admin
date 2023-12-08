import request from '..'

// 获取全部角色
export function getEntireRoles() {
  return request.post({
    url: '/role/list'
  })
}

// 获取全部部门
export function getEntireDepartments() {
  return request.post({
    url: '/department/list'
  })
}
