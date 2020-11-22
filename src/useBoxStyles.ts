import clsx from 'clsx'
import { useStyles } from 'react-treat'

import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as styleRefs from './useBoxStyles.treat'

type UnpackedArray<T> = T extends (infer U)[] ? U : T

export type StyleProps<TRefName extends keyof typeof styleRefs> = Partial<
  {
    [P in keyof typeof styleRefs[TRefName]]: ResponsiveProp<
      keyof UnpackedArray<typeof styleRefs[TRefName][P]>
    >
  }
>

export type BoxStylesProps = StyleProps<'styles'>
export type BoxHoverProps = StyleProps<'hover'>
export type BoxFocusProps = StyleProps<'focus'>

// const resolveClassNames = <TRefName extends keyof typeof styleRefs>(
//   props: StyleProps<TRefName> | undefined,
//   styles: any,
// ) => {
const resolveClassNames = (
  props: BoxStylesProps | BoxHoverProps | BoxFocusProps | undefined,
  styles: any,
) => {
  if (props === undefined) return

  let resolvedClassNames: (string | undefined)[] = []

  for (const key in props) {
    const value = props[key as keyof typeof props]
    if (value === null || value === undefined) continue

    resolvedClassNames.push(resolveResponsiveProp(value, styles[key]))
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
export function useBoxStyles(styles: BoxStylesProps | undefined): string {
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
