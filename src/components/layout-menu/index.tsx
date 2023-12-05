import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuWrapper } from './style'
import { Menu, MenuProps } from 'antd'
import { useMenuItems } from '@/hooks/useMenuItems'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { changeOpenKeysAction, changeSelectedKeysAction } from './store'
import { localCache } from '@/utils/cache'
import { CACHE_OPEN_KEYS, CACHE_SELECTED_KEYS } from './service/constants'

interface IProps {
  children?: ReactNode
}
const LayoutMenu: FC<IProps> = () => {
  const menuItems = useMenuItems()
  const dispatch = useAppDispatch()
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
    // 将展开的数据存入本地刷新时，进行加载
    localCache.setCache(CACHE_OPEN_KEYS, newOpenKeys)
    dispatch(changeOpenKeysAction(newOpenKeys))
  }
  // 处理选中
  const handleMenuClick: MenuProps['onClick'] = (item) => {
    const keys = [item.key]
    // 将选中数据存入本地刷新时进行加载，在hook里面使用, useLocalData
    localCache.setCache(CACHE_SELECTED_KEYS, keys)
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
