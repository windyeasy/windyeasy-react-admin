import { CACHE_OPEN_KEYS, CACHE_SELECTED_KEYS } from '@/components/layout-menu/service/constants'
import { changeOpenKeysAction, changeSelectedKeysAction } from '@/components/layout-menu/store'
import { ACOUNT_TOKEN, MENU_LIST, USER_INFO } from '@/pages/login/service/constants'
import {
  changeIsLoginAction,
  changeMenuListAction,
  changeUserInfoAction
} from '@/pages/login/store'
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
    const menuList = localCache.getCache(MENU_LIST)
    if (token && userInfo && menuList) {
      dispatch(changeUserInfoAction(userInfo))
      dispatch(changeMenuListAction(menuList))
      dispatch(changeIsLoginAction(true))
    }
    // 刷新时保存菜单展开状态
    if (isCollapsed) {
      dispatch(changeIsCollapsedAction(true))
    }
    // 刷新时保存菜单展开和选中状态
    const openKeys = localCache.getCache(CACHE_OPEN_KEYS)
    const selectedKeys = localCache.getCache(CACHE_SELECTED_KEYS)
    if (openKeys) {
      dispatch(changeOpenKeysAction(openKeys))
    }
    if (selectedKeys) {
      dispatch(changeSelectedKeysAction(selectedKeys))
    }
  }, [dispatch])
}
