import request from '@/services'

export function newUser(payload: any) {
  return request.post({
    url: '/user',
    data: payload
  })
}
