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

const resolveClassNames = (props: BoxStylesProps | undefined, styles: any) => {
  if (props === undefined) return

  let resolvedClassNames: (string | undefined)[] = []

  for (const key in props) {
    const value = props[key as keyof Theme['rules']]
    if (!value) continue

    resolvedClassNames.push(
      resolveResponsiveProp(value, styles[key as keyof Theme['rules']]),
    )
  }

  return resolvedClassNames
}

export function useBoxStyles(styles: BoxStylesProps | undefined): string {
  const boxStyles = useStyles(styleRefs)

  return clsx(resolveClassNames(styles, boxStyles.styles))
}

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
