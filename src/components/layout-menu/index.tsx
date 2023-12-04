import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuWrapper } from './style'
import { Menu } from 'antd'
import { useMenuItems } from '@/hooks/useMenuItems'

interface IProps {
  children?: ReactNode
}
const LayoutMenu: FC<IProps> = () => {
  const menuItems = useMenuItems()
  return (
    <MenuWrapper>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
        items={menuItems}
      />
    </MenuWrapper>
  )
}

export default memo(LayoutMenu)
