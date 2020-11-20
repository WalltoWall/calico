import clsx from 'clsx'
import { Theme } from 'treat/theme'
import { useStyles } from 'react-treat'

import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as styleRefs from './useBoxStyles.treat'
import { useCalicoTheme } from './CalicoProvider'
import { CalicoTheme } from './createCalicoTheme'

type NotUndefOrNever<T extends {}> = Pick<
  T,
  { [K in keyof T]: T[K] extends undefined | never ? never : K }[keyof T]
>

export type BoxStylesProps = {
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

const resolveClassNames = (
  props: BoxStylesProps | undefined,
  styles: any,
  calicoTheme: CalicoTheme,
) => {
  if (props === undefined) return

  let resolvedClassNames: (string | undefined)[] = []
  const aliasNames = Object.keys(calicoTheme.aliases)

  for (const key in props) {
    const value = props[key]
    if (value === null || value === undefined) continue

    // TODO: Refactor to create aliases at build time if we can get purgeCSS working.
    if (aliasNames.includes(key)) {
      calicoTheme.aliases[key]!.forEach((cssProperty) =>
        resolvedClassNames.push(
          resolveResponsiveProp(value, styles[cssProperty]),
        ),
      )

      continue
    }

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
  const calicoTheme = useCalicoTheme()

  return clsx(resolveClassNames(styles, boxStyles.styles, calicoTheme))
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
  const calicoTheme = useCalicoTheme()
  const boxStyles = useStyles(styleRefs)

  return clsx(resolveClassNames(styles, boxStyles[pseudo], calicoTheme))
}
