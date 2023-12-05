import React, { Suspense } from 'react'
import { Navigate, useLocation, useRoutes } from 'react-router-dom'
// import routes from './router'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { useLoadLocalData } from './hooks/useLocalData'
import { useRoutingDynamic } from './hooks/useRoutingDynamic'
import { firstMenu } from './utils/map-menu'

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
  return (
    <div className="App">
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
        {handleRouterNav()}
      </Suspense>
    </div>
  )
}

export default App
