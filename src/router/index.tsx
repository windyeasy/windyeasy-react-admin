import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('@/pages/login'))
const Main = lazy(() => import('@/pages/main'))
const NotFound = lazy(() => import('@/pages/not-found'))
const User = lazy(() => import('@/pages/main/system/user'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/main" />
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '/main/system/user',
        element: <User />
      },
      {
        path: '/main/*',
        element: <NotFound />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
