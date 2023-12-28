import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DisplayIframeWrapper } from './style'

interface IProps {
  children?: ReactNode
  url?: string
}

const DisplayIframe: FC<IProps> = (props) => {
  const { url = '' } = props
  return (
    <DisplayIframeWrapper>
      <iframe className="iframe" src={url} />
    </DisplayIframeWrapper>
  )
}

export default memo(DisplayIframe)
