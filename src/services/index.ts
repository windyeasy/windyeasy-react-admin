import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import Request from './request'
import { ACCOUNT_TOKEN } from '@/pages/login/service/constants'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      /**
       * 在拦截里面添加token
       **/
      const token = localCache.getCache(ACCOUNT_TOKEN)
      if (config.headers && token) {
        config.headers.Authorization = 'Bearer ' + token
      }
      return config
    }
  }
})
export default request
