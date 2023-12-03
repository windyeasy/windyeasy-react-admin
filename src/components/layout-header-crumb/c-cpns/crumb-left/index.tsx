import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CrumbLeftWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { changeIsCollapsedAction } from '@/pages/main/store'
import { localCache } from '@/utils/cache'
import { COLLAPSED } from '@/pages/main/service/constants'

interface IProps {
  children?: ReactNode
}

const CrumbLeft: FC<IProps> = () => {
  const { isCollapsed } = useAppSelector(
    (state) => ({
      isCollapsed: state.main.isCollapsed
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()
  function handleCollapsedClick() {
    const newIsCollapsed = !isCollapsed
    dispatch(changeIsCollapsedAction(newIsCollapsed))
    // 存储切换状态
    console.log(newIsCollapsed)
    localCache.setCache(COLLAPSED, newIsCollapsed)
  }
  return (
    <CrumbLeftWrapper>
      <div className="collapsed" onClick={handleCollapsedClick}>
        {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className="breadcrumbs"></div>
    </CrumbLeftWrapper>
  )
}

export default memo(CrumbLeft)
