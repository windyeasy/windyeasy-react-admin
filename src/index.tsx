import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

import 'normalize.css'
import '@/assets/css/index.less'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import App from '@/App'
import store from './store'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'

dayjs.locale('zh-cn')
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </ConfigProvider>
  </ThemeProvider>
)
