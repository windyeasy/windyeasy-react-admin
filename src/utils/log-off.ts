import { localCache } from './cache'
import store from '@/store'
import { changeIsLoginAction } from '@/pages/login/store'

export function logOff() {
  localCache.clear()
  store.dispatch(changeIsLoginAction(false))
}
