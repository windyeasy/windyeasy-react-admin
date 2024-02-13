import React, { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Dashboard = lazy(() => import('@/pages/main/dashboard'))
const route: RouteObject = {
  path: '/main/dashboard',
  element: <Dashboard />
}

export default route
