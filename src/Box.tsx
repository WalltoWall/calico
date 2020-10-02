import * as React from 'react'
import {
  Box as PolymorphicBox,
  PolymorphicComponentProps,
} from 'react-polymorphic-box'
import clsx from 'clsx'

import { SafeReactHTMLAttributes } from './types'
import {
  useBoxStyles,
  usePseudoBoxStyles,
  BoxStylesProps,
  BoxHoverProps,
  BoxFocusProps,
} from './useBoxStyles'

const defaultElement = 'div'

/**
 * A `<Box />` accepts all standard HTML props in addition to
 * some additional props for styling.
 */
type CalicoBoxProps = {
  /** The atomic styles to apply to this element. */
  styles?: BoxStylesProps

  /** The atomic hover styles to apply to this element. */
  hoverStyles?: BoxHoverProps

  /** The atomic hover styles to apply to this element. */
  focusStyles?: BoxFocusProps
} & Omit<SafeReactHTMLAttributes, 'as'>

export type BoxProps<
  E extends React.ElementType = typeof defaultElement
> = PolymorphicComponentProps<E, CalicoBoxProps>

/**
 * The basic building block of `calico`. By default, it renders a `<div />` element,
 * but this can be overridden via the `as` prop.
 *
 * @param props
 *
 * @example
 * const Example = () => <Box styles={{ color: 'red' }} />
 */
export const Box = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    { styles, hoverStyles, focusStyles, className, ...restProps }: BoxProps<E>,
    innerRef: typeof restProps.ref,
  ) => {
    const resolvedClassNames =
      clsx(
        useBoxStyles(styles),
        usePseudoBoxStyles(focusStyles, 'focus'),
        usePseudoBoxStyles(hoverStyles, 'hover'),
        className,
      ) || undefined

    return (
      <PolymorphicBox
        as={defaultElement}
        className={resolvedClassNames}
        {...restProps}
        ref={innerRef}
      />
    )
  },
) as (<E extends React.ElementType = typeof defaultElement>(
  props: BoxProps<E>,
) => JSX.Element) & { displayName: string }

Box.displayName = 'Box'
