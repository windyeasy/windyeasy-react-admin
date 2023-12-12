import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Header } from 'antd/es/layout/layout'

import { useAppSelector } from '@/store'
import { MainWrapper } from './style'
import { LayoutHeaderCrumb, LayoutMenu } from '@/layout'
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
