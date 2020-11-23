import clsx from 'clsx'
import { useStyles } from 'react-treat'
import { SimplePseudos } from 'csstype'

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

export type BoxStylesProps<K extends '_' | SimplePseudos> = Partial<
  {
    [P in keyof typeof styleRefs.styles as K extends keyof typeof styleRefs.styles[P]
      ? P
      : never]: K extends keyof typeof styleRefs.styles[P]
      ? ResponsiveProp<keyof UnpackedArray<typeof styleRefs.styles[P][K]>>
      : never
  }
>

// const resolveClassNames = <TRefName extends keyof typeof styleRefs>(
//   props: StyleProps<TRefName> | undefined,
//   styles: any,
// ) => {
const resolveClassNames = <K extends '_' | SimplePseudos>(
  props: BoxStylesProps<K> | undefined,
  pseudo: K,
  styles: typeof styleRefs.styles,
) => {
  if (props === undefined) return

  let resolvedClassNames: (string | undefined)[] = []

  for (const key in props) {
    const value = props[key as keyof typeof props]
    if (value === null || value === undefined) continue

    resolvedClassNames.push(
      resolveResponsiveProp(
        // @ts-ignore
        value,
        // @ts-ignore
        styles?.[key as keyof typeof styles]?.[pseudo],
      ),
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
export function useBoxStyles(styles: BoxStylesProps<'_'> | undefined): string {
  const boxStyles = useStyles(styleRefs)

  return clsx(resolveClassNames(styles, '_', boxStyles.styles))
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
export function usePseudoBoxStyles<K extends SimplePseudos>(
  styles: BoxStylesProps<K> | undefined,
  pseudo: K,
): string {
  const boxStyles = useStyles(styleRefs)

  return clsx(resolveClassNames(styles, pseudo, boxStyles.styles))
}
