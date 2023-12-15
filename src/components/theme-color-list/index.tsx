import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import ColorCard from '../color-card'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { useTheme } from '@/hooks/useTheme'

interface IProps {
  children?: ReactNode
}

const ThemeColorList: FC<IProps> = () => {
  const { changeThemeConfig } = useTheme()
  const { primaryListColor, themeConfig } = useAppSelector(
    (state) => ({
      primaryListColor: state.theme.primaryListColor,
      themeConfig: state.theme.themeConfig
    }),
    shallowEqual
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  // 修改主题色
  function changeColorPrimary(color: string) {
    const newThemeConfig = { ...themeConfig }
    newThemeConfig.colorPrimary = color
    changeThemeConfig(newThemeConfig)
  }
  useEffect(() => {
    // 查询索引
    const index = primaryListColor.findIndex((item) => item.color === themeConfig.colorPrimary)
    if (index !== -1) {
      setCurrentIndex(index)
    }
  }, [themeConfig])
  return (
    <div className="theme-color-list">
      {primaryListColor.map((item, index) => {
        return (
          <ColorCard
            bgColor={item.color}
            checked={currentIndex === index}
            tipTitle={item.tipTitle}
            onTap={changeColorPrimary}
            key={item.tipTitle}
          />
        )
      })}
    </div>
  )
}

export default memo(ThemeColorList)
