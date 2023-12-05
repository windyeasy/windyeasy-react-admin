import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuWrapper } from './style'
import { Menu, MenuProps } from 'antd'
import { useMenuItems } from '@/hooks/useMenuItems'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { changeOpenKeysAction, changeSelectedKeysAction } from './store'
import { useRouteChangeActiveMenu } from '@/hooks/useRouteChangeActiveMenu'

interface IProps {
  children?: ReactNode
}
const LayoutMenu: FC<IProps> = () => {
  const menuItems = useMenuItems()
  const dispatch = useAppDispatch()
  useRouteChangeActiveMenu()
  const { openKeys, selectedKeys } = useAppSelector(
    (state) => ({
      openKeys: state.menu.openKeys,
      selectedKeys: state.menu.selectedKeys
    }),
    shallowEqual
  )
  // 处理展开
  function handleOpenChange(openKeys: string[]) {
    const newOpenKeys = openKeys.slice(-1)

    dispatch(changeOpenKeysAction(newOpenKeys))
  }
  // 处理选中
  const handleMenuClick: MenuProps['onClick'] = (item) => {
    const keys = [item.key]

    dispatch(changeSelectedKeysAction(keys))
  }
  return (
    <MenuWrapper>
      <Menu
        mode="inline"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onClick={handleMenuClick}
        onOpenChange={handleOpenChange}
        style={{ height: '100%' }}
        items={menuItems}
      />
    </MenuWrapper>
  )
}

export default memo(LayoutMenu)
