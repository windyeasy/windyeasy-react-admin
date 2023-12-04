import { MenuItemRes } from '@/pages/login/service/type'
import { checkArrayNotEmpty } from './checkValue'
import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

export function handleMenuList(menuList: MenuItemRes[]) {
  const menuItems: MenuProps['items'] = []
  for (const item of menuList) {
    // 判断是权限，内容列表时返回空数组
    if (item.permission) {
      return []
    }
    if (checkArrayNotEmpty(item.children) && item.children) {
      const childrenArray = handleMenuList(item.children)
      // 当数组为空时不加入菜单
      if (checkArrayNotEmpty(childrenArray)) {
        menuItems.push(getItem(item.name, String(item.id), '', childrenArray))
      } else {
        menuItems.push(getItem(item.name, String(item.id), ''))
      }
    } else {
      menuItems.push(getItem(item.name, String(item.id), ''))
    }
  }
  return menuItems
}
