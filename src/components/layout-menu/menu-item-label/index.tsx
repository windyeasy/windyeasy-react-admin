import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemLabelWrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  url?: string | null
}

const MenuItemLabel: FC<IProps> = (props) => {
  let { url } = props
  url = url ?? ''
  return (
    <ItemLabelWrapper>
      <Link to={url}>{props.children}</Link>
    </ItemLabelWrapper>
  )
}

export default memo(MenuItemLabel)
