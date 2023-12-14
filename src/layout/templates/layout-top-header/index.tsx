import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Header } from 'antd/es/layout/layout'
import { useAppSelector } from '@/store'
import { LayoutHeaderCrumb, LayoutMenu } from '@/layout'
import LoginInfo from '@/components/login-info'
import { shallowEqual } from 'react-redux'
import { TopHeaderWrapper } from './style'
interface IProps {
  children?: ReactNode
}

const LayoutTopHeader: FC<IProps> = () => {
  const { isCollapsed } = useAppSelector(
    (state) => ({
      isCollapsed: state.main.isCollapsed
    }),
    shallowEqual
  )
  return (
    <TopHeaderWrapper>
      <Layout>
        <Header>
          <div className="header-left">
            <LoginInfo />
          </div>
          <LayoutHeaderCrumb />
        </Header>

        <Layout>
          <Sider width={220} collapsed={isCollapsed} collapsedWidth={60}>
            <LayoutMenu />
          </Sider>
          <Content>
            <Suspense fallback="">
              <Outlet />
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </TopHeaderWrapper>
  )
}

export default memo(LayoutTopHeader)
