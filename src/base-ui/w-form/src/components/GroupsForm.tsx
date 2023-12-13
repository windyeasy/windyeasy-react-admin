import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const GroupsForm: FC<IProps> = () => {
  return <div>GroupsForm</div>
}

export default memo(GroupsForm)
