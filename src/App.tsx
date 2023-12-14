import React, { Suspense } from 'react'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'
import { shallowEqual } from 'react-redux'

import { Navigate, useLocation, useRoutes } from 'react-router-dom'
import { useAppSelector } from '@/store'

import { useLoadLocalData } from './hooks/useLocalData'
import { useRoutingDynamic } from './hooks/useRoutingDynamic'
import { firstMenu } from './utils/map-menu'
import { useTheme } from './hooks/useTheme'

function App() {
  const location = useLocation()

  const { isLogin } = useAppSelector(
    (state) => ({
      isLogin: state.login.isLogin
    }),
    shallowEqual
  )
  // 处理路由导航，实现路由跳转
  function handleRouterNav() {
    const path = location.pathname
    if (path.startsWith('/main') && !isLogin) {
      return <Navigate to="/login" />
    }
    if (path === '/login' && isLogin) {
      return <Navigate to="/main" />
    }
    if (path === '/main' && isLogin) {
      const path = firstMenu ? firstMenu.url ?? '' : ''
      return <Navigate to={path} />
    }
  }
  // 使用获取本地数据hook
  useLoadLocalData()
  const routes = useRoutingDynamic('/main')
  const theme = useTheme()
  return (
    <ConfigProvider locale={zhCN} theme={theme}>
      <div className="App">
        <Suspense fallback="">
          <div className="main">{useRoutes(routes)}</div>
          {handleRouterNav()}
        </Suspense>
      </div>
    </ConfigProvider>
  )
}

export default App
