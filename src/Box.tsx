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
  UseBoxStylesProps,
  UsePseudoBoxStylesProps,
} from './useBoxStyles'

const defaultElement = 'div'

export type BoxStylesProps = UseBoxStylesProps
export type BoxFocusStylesProps = UsePseudoBoxStylesProps<':focus'>
export type BoxHoverStylesProps = UsePseudoBoxStylesProps<':hover'>

type CalicoBoxProps<
  E extends React.ElementType = React.ElementType,
  F = E extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[E] : E
> = {
  // TODO: Remove in 1.0 release.
  /**
   * The HTML element to render the `Box` as.
   *
   * @deprecated Use the `as` prop instead.
   */
  component?: React.ElementType

  /** The atomic styles to apply to this element. */
  styles?: BoxStylesProps

  /** The atomic hover styles to apply to this element. */
  hoverStyles?: BoxHoverStylesProps

  /** The atomic hover styles to apply to this element. */
  focusStyles?: BoxFocusStylesProps
} & Omit<SafeReactHTMLAttributes<F>, 'as'>

/**
 * A `<Box />` accepts all standard HTML props in addition to some additional
 * props for styling.
 */
export type BoxProps<
  E extends React.ElementType = typeof defaultElement
> = PolymorphicComponentProps<E, CalicoBoxProps<E>>

// TODO: Remove in 1.0 release.
let didWarnAboutComponentPropMigration = false

/**
 * The basic building block of Calico. By default, it renders a `<div />`
 * element, but this can be overridden via the `as` prop.
 *
 * @param props
 *
 * @example
 * const Example = () => <Box styles={{ color: 'red' }} />
 */
export const Box = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    {
      styles,
      hoverStyles,
      focusStyles,
      className,
      component,
      ...restProps
    }: BoxProps<E>,
    innerRef: typeof restProps.ref,
  ) => {
    const resolvedClassNames =
      clsx(
        useBoxStyles(styles),
        usePseudoBoxStyles(focusStyles, ':focus'),
        usePseudoBoxStyles(hoverStyles, ':hover'),
        className,
      ) || undefined

    // TODO: Remove in 1.0 release.
    if (
      process.env.NODE_ENV !== 'production' &&
      component &&
      !didWarnAboutComponentPropMigration
    ) {
      console.warn(
        'A Calico <Box> component was found using the `component` prop. The `component` prop is deprecated and has been replaced by the `as` prop and will be removed in v1.0. You should be able to rename `component` to `as` without any other changes.',
      )
      didWarnAboutComponentPropMigration = true
    }

    return (
      <PolymorphicBox
        as={component || defaultElement}
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
