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

/**
 * A `<Box />` accepts all standard HTML props in addition to
 * some additional props for styling.
 */
export type BoxProps = {
  /** The HTML element to render the `Box` as. */
  component?: React.ElementType

  children?: React.ReactNode

  /** The atomic styles to apply to this element. */
  styles?: BoxStylesProps

  /** The atomic hover styles to apply to this element. */
  hoverStyles?: BoxHoverProps

  /** The atomic hover styles to apply to this element. */
  focusStyles?: BoxFocusProps
} & SafeReactHTMLAttributes

/**
 * The basic building block of `calico`. By default, it renders a `<div />` element,
 * but this can be overridden via the `component` prop.
 *
 * @param props
 *
 * @example
 * const Example = () => <Box styles={{ color: 'red' }} />
 */
export const Box = React.forwardRef(
  (
    {
      component = 'div',
      children,
      className,
      styles,
      hoverStyles,
      focusStyles,
      ...props
    }: BoxProps,
    ref,
  ) => {
    const resolvedClassNames =
      clsx(
        useBoxStyles(styles),
        usePseudoBoxStyles(focusStyles, 'focus'),
        usePseudoBoxStyles(hoverStyles, 'hover'),
        className,
      ) || undefined

    return React.createElement(
      component,
      { className: resolvedClassNames, ref, ...props },
      children,
    )
  },
)

Box.displayName = 'Box'
