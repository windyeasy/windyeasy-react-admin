import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MainWrapper } from './style'
import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Header } from 'antd/es/layout/layout'
import LayoutHeaderCrumb from '@/components/layout-header-crumb'
interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  return (
    <MainWrapper>
      <Layout>
        <Sider width={220}></Sider>
        <Layout>
          <Header>
            <LayoutHeaderCrumb />
          </Header>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </MainWrapper>
  )
}

export default memo(Main)
