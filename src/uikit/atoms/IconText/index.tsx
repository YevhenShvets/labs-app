import React from 'react'
import { classnames } from 'tools/common'

export interface IconTextProps {
  Icon: JSX.Element
  title: string
  titleClassName?: string
  className?: string
}

const IconText = ({
  Icon,
  title,
  titleClassName,
  className,
}: IconTextProps) => {
  return (
    <div className={classnames('flex items-center', className)}>
      {Icon}
      <p className={classnames('ml-2', titleClassName)}>{title}</p>
    </div>
  )
}

export default IconText
