import React from 'react'
import clsx from 'clsx'

import { SafeReactHTMLAttributes } from './types'
import {
  useBoxStyles,
  usePseudoBoxStyles,
  BoxStylesProps,
  BoxHoverProps,
  BoxFocusProps,
} from './useBoxStyles'

export type BoxProps = {
  component?: React.ElementType
  children?: React.ReactNode
  styles?: BoxStylesProps
  hoverStyles?: BoxHoverProps
  focusStyles?: BoxFocusProps
} & SafeReactHTMLAttributes

export const Box = ({
  component = 'div',
  children,
  className,
  styles,
  hoverStyles,
  focusStyles,
  ...props
}: BoxProps) => {
  const resolvedClassNames =
    clsx(
      useBoxStyles(styles),
      usePseudoBoxStyles(focusStyles, 'focus'),
      usePseudoBoxStyles(hoverStyles, 'hover'),
      className,
    ) || undefined

  return React.createElement(
    component,
    { className: resolvedClassNames, ...props },
    children,
  )
}
