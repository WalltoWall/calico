import clsx from 'clsx'
import { Theme } from 'treat/theme'
import { useStyles } from 'react-treat'

import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as styleRefs from './useBoxStyles.treat'

type NotUndefOrNever<T extends {}> = Pick<
  T,
  { [K in keyof T]: T[K] extends undefined | never ? never : K }[keyof T]
>

export type BoxStylesProps = {
  [K in keyof Theme['rules']]?: ResponsiveProp<keyof Theme['rules'][K]>
}

export type _BoxStylesProps = {
  [K in keyof Theme['aliases'] | keyof Theme['rules']]?: ResponsiveProp<
    K extends keyof Theme['rules']
      ? keyof Theme['rules'][K]
      : keyof Theme['rules'][Theme['aliases'][K][number]]
  >
}

export type BoxHoverProps = NotUndefOrNever<
  {
    [K in keyof Theme['variants']]?: NonNullable<
      Theme['variants'][K]
    >['hover'] extends true
      ? ResponsiveProp<keyof Theme['rules'][K]>
      : never
  }
>

export type BoxFocusProps = NotUndefOrNever<
  {
    [K in keyof Theme['variants']]?: NonNullable<
      Theme['variants'][K]
    >['focus'] extends true
      ? ResponsiveProp<keyof Theme['rules'][K]>
      : never
  }
>

// TODO: Make this work with aliases.
const resolveClassNames = (props: _BoxStylesProps | undefined, styles: any) => {
  if (props === undefined) return

  let resolvedClassNames: (string | undefined)[] = []

  for (const key in props) {
    const value = props[key as keyof Theme['rules']]
    if (value === null || value === undefined) continue

    // TODO: Something around here
    resolvedClassNames.push(
      resolveResponsiveProp(value, styles[key as keyof Theme['rules']]),
    )
  }

  return resolvedClassNames
}

/**
 * A React hook for mapping atomic styles to `className`s. This is the low
 * level hook that `<Box />` is built on.
 *
 * @param styles - The object of styles to map to `className`s
 * @returns A string containing the resolved `className`s.
 */
export function useBoxStyles(styles: _BoxStylesProps | undefined): string {
  const boxStyles = useStyles(styleRefs)

  return clsx(resolveClassNames(styles, boxStyles.styles))
}

/**
 * A React hook for mapping pseudo atomic styles to `className`s. This is the low
 * level hook that `<Box />` is built on.
 *
 * @remarks
 * Psuedo refers to pseudo-modifiers such as `:hover` and `:focus`.
 *
 * @param styles The object of styles to map to `className`s
 * @param psuedo The pseudo modifier to use.
 * @returns A string containing the resolved `className`s.
 */
export function usePseudoBoxStyles(
  styles: BoxFocusProps | undefined,
  pseudo: 'focus',
): string
export function usePseudoBoxStyles(
  styles: BoxHoverProps | undefined,
  pseudo: 'hover',
): string
export function usePseudoBoxStyles(
  styles: BoxHoverProps | BoxFocusProps | undefined,
  pseudo: 'focus' | 'hover',
): string {
  const boxStyles = useStyles(styleRefs)

  return clsx(resolveClassNames(styles, boxStyles[pseudo]))
}
