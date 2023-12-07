import request from '../..'

export function postUserList(queryInfo: any = { offset: 0, size: 10 }) {
  return request.post({
    url: '/users/list',
    data: queryInfo
  })
}
