import clsx from 'clsx'
import { Theme } from 'treat/theme'
import { useStyles as useTreatStyles } from 'react-treat'

import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as treatStyleRefs from './useStyles.treat'

export type UseStylesProps = {
  [K in keyof Theme['rules']]?: ResponsiveProp<keyof Theme['rules'][K]>
}

const resolveClassNames = (props: UseStylesProps, styles: any) => {
  let resolvedClassNames: (string | undefined)[] = []

  for (const key in props) {
    const value = props[key as keyof Theme['rules']]
    if (!value) continue

    resolvedClassNames.push(
      resolveResponsiveProp<string | number>(
        value,
        styles[key as keyof Theme['rules']],
      ),
    )
  }

  return resolvedClassNames
}

export const useStyles = (props: UseStylesProps = {}) => {
  const styleRefs = useTreatStyles(treatStyleRefs)

  return clsx(resolveClassNames(props, styleRefs.styles))
}

type NotUndefOrNever<T extends {}> = Pick<
  T,
  { [K in keyof T]: T[K] extends undefined | never ? never : K }[keyof T]
>

export type UseHoverProps = NotUndefOrNever<
  {
    [K in keyof Theme['variants']]?: NonNullable<
      Theme['variants'][K]
    >['hover'] extends true
      ? ResponsiveProp<keyof Theme['rules'][K]>
      : never
  }
>

export const useHoverStyles = (props: UseHoverProps = {}) => {
  const styleRefs = useTreatStyles(treatStyleRefs)

  return clsx(resolveClassNames(props, styleRefs.hoverStyles))
}

type FocusProps = {
  [K in keyof Theme['variants']]?: NonNullable<
    Theme['variants'][K]
  >['focus'] extends true
    ? ResponsiveProp<keyof Theme['rules'][K]>
    : never
}

export type UseFocusProps = NotUndefOrNever<FocusProps>

export const useFocusStyles = (props: UseFocusProps = {}) => {
  const styleRefs = useTreatStyles(treatStyleRefs)

  return clsx(resolveClassNames(props, styleRefs.focusStyles))
}
