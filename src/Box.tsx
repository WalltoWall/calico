import React from 'react'
import clsx from 'clsx'

import { SafeReactHTMLAttributes } from './types'
import { UseBoxStylesProps, useBoxStyles } from './useBoxStyles'

export type BoxProps = {
  component?: React.ElementType
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
} & UseBoxStylesProps &
  SafeReactHTMLAttributes

export const Box = ({
  component,
  children,
  className,
  style,

  styles,
  hoverStyles,
  focusStyles,
  ...props
}: BoxProps) => {
  const resolvedClassNames = useBoxStyles({
    styles,
    hoverStyles,
    focusStyles,
  })

  const Tag = component ?? 'div'

  return (
    <Tag
      className={clsx(resolvedClassNames, className) || undefined}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  )
}
