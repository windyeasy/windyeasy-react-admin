import React, { Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import routes from './router'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { useLoadLocalData } from './hooks/useLocalData'

function App() {
  const { isLogin } = useAppSelector(
    (state) => ({
      isLogin: state.login.isLogin
    }),
    shallowEqual
  )
  // 使用获取本地数据hook
  useLoadLocalData()
  return (
    <div className="App">
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
        {isLogin ? <Navigate to="/main" /> : <Navigate to="/login" />}
      </Suspense>
    </div>
  )
}

export default App
