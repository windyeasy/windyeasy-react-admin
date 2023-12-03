import { ACOUNT_TOKEN, USER_INFO } from '@/pages/login/service/constants'
import { changeIsLoginAction, changeUserInfoAction } from '@/pages/login/store'
import { COLLAPSED } from '@/pages/main/service/constants'
import { changeIsCollapsedAction } from '@/pages/main/store'
import { localCache } from '@/utils/cache'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

/**
 * 加载本地信息hook，当刷新页面时更改登录数据
 */
export const useLoadLocalData = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const userInfo = localCache.getCache(USER_INFO)
    const token = localCache.getCache(ACOUNT_TOKEN)
    const isCollapsed = localCache.getCache(COLLAPSED)
    if (token && userInfo) {
      dispatch(changeUserInfoAction(userInfo))
      dispatch(changeIsLoginAction(true))
    }
    // 刷新时保存状态
    if (isCollapsed) {
      dispatch(changeIsCollapsedAction(true))
    }
  }, [dispatch])
}
