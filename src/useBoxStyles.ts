import clsx from 'clsx'
import { useStyles } from 'react-treat'

import { resolveResponsiveProp } from './utils'
import { ResponsiveProp, RecordValue } from './types'

import * as styleRefs from './useBoxStyles.treat'

export type UseBoxStylesProps = Partial<
  {
    [P in keyof typeof styleRefs.styles]: ResponsiveProp<
      keyof RecordValue<typeof styleRefs.styles[P]>
    >
  }
>

export type UsePseudoBoxStylesProps<
  K extends keyof typeof styleRefs.pseudos
> = Partial<
  {
    [P in keyof typeof styleRefs.pseudos[K]]: ResponsiveProp<
      keyof RecordValue<typeof styleRefs.pseudos[K][P]>
    >
  }
>

const resolveClassNames = <K extends keyof typeof styleRefs.pseudos>(
  props: UseBoxStylesProps | UsePseudoBoxStylesProps<K> | undefined,
  styles: typeof styleRefs.styles | typeof styleRefs.pseudos[K] = {},
  pseudo?: K,
) => {
  if (props === undefined) return

  let resolvedClassNames: (string | undefined)[] = []

  for (const propertyName in props) {
    const value = props[propertyName as keyof typeof props]
    if (value === null || value === undefined) continue

    const responsiveAtoms = styles[propertyName as keyof typeof styles]
    if (!responsiveAtoms)
      throw new Error(
        `Theme does not contain atom "${value}" for property "${propertyName}"${
          pseudo ? ` for pseudo "${pseudo}"` : ''
        }.`,
      )

    resolvedClassNames.push(
      resolveResponsiveProp(
        // @ts-expect-error - Union type is too complex to represent.
        value,
        styles[propertyName as keyof typeof styles],
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

  return clsx(resolveClassNames(styles, boxStyles.pseudos[pseudo], pseudo))
}
