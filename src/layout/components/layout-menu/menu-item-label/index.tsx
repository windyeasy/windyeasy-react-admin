import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemLabelWrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  url?: string | null
  title: string
  isLink?: boolean
  isIframe?: boolean
}

const MenuItemLabel: FC<IProps> = (props) => {
  const { url, isLink = false, isIframe = false } = props
  const link = url ?? ''
  function showLink() {
    if (isLink && !isIframe) {
      return (
        <Link to={link} target="_blank">
          {props.title}
        </Link>
      )
    } else {
      return <Link to={link}>{props.title}</Link>
    }
  }
  return <ItemLabelWrapper>{showLink()}</ItemLabelWrapper>
}

export default memo(MenuItemLabel)
