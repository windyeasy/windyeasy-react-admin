import React from 'react'

import {
  AppstoreOutlined,
  DesktopOutlined,
  MessageOutlined,
  SettingOutlined
} from '@ant-design/icons'

import { MenuItemRes } from '@/pages/login/service/type'
import { checkArrayNotEmpty } from './checkValue'
import type { MenuProps } from 'antd'
import MenuItemLabel from '@/components/layout-menu/menu-item-label'

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

function getMenuIcon(iconname?: string | null) {
  switch (iconname) {
    case 'el-icon-monitor':
      return <DesktopOutlined />
    case 'el-icon-setting':
      return <SettingOutlined />
    case 'el-icon-goods':
      return <AppstoreOutlined />
    case 'el-icon-chat-line-round':
      return <MessageOutlined />
    default:
      return ''
  }
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
        menuItems.push(getItem(item.name, String(item.id), getMenuIcon(item.icon), childrenArray))
      } else {
        menuItems.push(
          getItem(
            <MenuItemLabel url={item.url} title={item.name} />,
            String(item.id),
            getMenuIcon(item.icon)
          )
        )
      }
    } else {
      menuItems.push(
        getItem(
          <MenuItemLabel url={item.url} title={item.name} />,
          String(item.id),
          getMenuIcon(item.icon)
        )
      )
    }
  }
  return menuItems
}
