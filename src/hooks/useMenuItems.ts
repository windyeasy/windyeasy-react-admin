import { useAppSelector } from '@/store'
import { handleMenuList } from '@/utils/handle-menu-list'
import { MenuProps } from 'antd'
import { shallowEqual } from 'react-redux'

export function useMenuItems() {
  const { menuList } = useAppSelector(
    (state) => ({
      menuList: state.login.menuList
    }),
    shallowEqual
  )
  let menuItems: MenuProps['items'] = []
  // 处理菜单列表
  if (menuList.length) {
    menuItems = handleMenuList(menuList)
  }
  return menuItems
}
