import { useAppSelector } from '@/store'
import { useEffect, useState } from 'react'
import { shallowEqual } from 'react-redux'
import { ThemeConfig, theme as antTheme } from 'antd'

// 通过antd设置主题
export function useTheme() {
  const [theme, setTheme] = useState<ThemeConfig>({})

  const { isDark, themeConfig } = useAppSelector(
    (state) => ({
      isDark: state.theme.isDark,
      themeConfig: state.theme.themeConfig
    }),
    shallowEqual
  )
  useEffect(() => {
    /**
     * 如何设计主题功能，
     * 1. 分为两个模式：
     *    default | dark,
     *
     *
     *
     */
    const { headerBg, sidlerBg } = themeConfig
    const newTheme: ThemeConfig = {
      algorithm: antTheme.defaultAlgorithm,
      components: {
        Layout: {
          headerBg: headerBg,
          siderBg: sidlerBg
        }
      }
    }
    if (isDark) {
      newTheme.algorithm = antTheme.darkAlgorithm
      newTheme.components = {
        Layout: {
          headerBg: '#141414',
          siderBg: '#141414'
        }
      }
    }
    setTheme(newTheme)
  }, [isDark, themeConfig])
  return theme
}
