import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MainWrapper } from './style'
import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Header } from 'antd/es/layout/layout'
import LayoutHeaderCrumb from '@/components/layout-header-crumb'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import LayoutMenu from '@/components/layout-menu'
import { Outlet } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  const { isCollapsed } = useAppSelector(
    (state) => ({
      isCollapsed: state.main.isCollapsed
    }),
    shallowEqual
  )
  return (
    <MainWrapper>
      <Layout>
        <Sider width={220} collapsed={isCollapsed} collapsedWidth={60}>
          <LayoutMenu />
        </Sider>
        <Layout>
          <Header>
            <LayoutHeaderCrumb />
          </Header>
          <Content>
            <Suspense fallback="">
              <Outlet />
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </MainWrapper>
  )
}

export default memo(Main)
