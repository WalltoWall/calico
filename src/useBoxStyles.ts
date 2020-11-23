import clsx from 'clsx'
import { useStyles } from 'react-treat'

import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as styleRefs from './useBoxStyles.treat'

type UnpackedArray<T> = T extends (infer U)[] ? U : T

export type UseBoxStylesProps = Partial<
  {
    [P in keyof typeof styleRefs.styles]: ResponsiveProp<
      keyof UnpackedArray<typeof styleRefs.styles[P]>
    >
  }
>

export type UsePseudoBoxStylesProps<
  K extends keyof typeof styleRefs.pseudos
> = Partial<
  {
    [P in keyof typeof styleRefs.pseudos[K]]: ResponsiveProp<
      keyof UnpackedArray<typeof styleRefs.pseudos[K][P]>
    >
  }
>

// const resolveClassNames = <TRefName extends keyof typeof styleRefs>(
//   props: StyleProps<TRefName> | undefined,
//   styles: any,
// ) => {
const resolveClassNames = <K extends keyof typeof styleRefs.pseudos>(
  props: UseBoxStylesProps | UsePseudoBoxStylesProps<K> | undefined,
  styles: typeof styleRefs.styles | typeof styleRefs.pseudos[K],
) => {
  if (props === undefined) return

  let resolvedClassNames: (string | undefined)[] = []

  for (const key in props) {
    const value = props[key as keyof typeof props]
    if (value === null || value === undefined) continue

    resolvedClassNames.push(
      resolveResponsiveProp(
        // @ts-expect-error - Type is too complex to represent
        value as string | number,
        styles[key as keyof typeof styles] as
          | Record<string | number, string>[]
          | undefined,
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
export function useBoxStyles(styles: UseBoxStylesProps | undefined): string {
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
export function usePseudoBoxStyles<K extends keyof typeof styleRefs.pseudos>(
  styles: UsePseudoBoxStylesProps<K> | undefined,
  pseudo: K,
): string {
  const boxStyles = useStyles(styleRefs)

  return clsx(resolveClassNames(styles, boxStyles.pseudos[pseudo]))
}
