import clsx from 'clsx'
import { Theme } from 'treat/theme'
import { useStyles } from 'react-treat'

import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as treatStyleRefs from './useBoxStyles.treat'

type UseBaseBoxStylesProps = {
  [K in keyof Theme['rules']]?: ResponsiveProp<keyof Theme['rules'][K]>
}

const resolveClassNames = (props: UseBaseBoxStylesProps, styles: any) => {
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

const useBaseBoxStyles = (props: UseBaseBoxStylesProps = {}) => {
  const styleRefs = useStyles(treatStyleRefs)

  return clsx(resolveClassNames(props, styleRefs.styles))
}

type NotUndefOrNever<T extends {}> = Pick<
  T,
  { [K in keyof T]: T[K] extends undefined | never ? never : K }[keyof T]
>

type BoxHoverProp = NotUndefOrNever<
  {
    [K in keyof Theme['variants']]?: NonNullable<
      Theme['variants'][K]
    >['hover'] extends true
      ? ResponsiveProp<keyof Theme['rules'][K]>
      : never
  }
>

const useHoverStyles = (props: BoxHoverProp = {}) => {
  const styleRefs = useStyles(treatStyleRefs)

  return clsx(resolveClassNames(props, styleRefs.hoverStyles))
}

type BoxFocusProp = NotUndefOrNever<
  {
    [K in keyof Theme['variants']]?: NonNullable<
      Theme['variants'][K]
    >['focus'] extends true
      ? ResponsiveProp<keyof Theme['rules'][K]>
      : never
  }
>

const useFocusStyles = (props: BoxFocusProp = {}) => {
  const styleRefs = useStyles(treatStyleRefs)

  return clsx(resolveClassNames(props, styleRefs.focusStyles))
}

export type UseBoxStylesProps = {
  hover?: BoxHoverProp
  focus?: BoxFocusProp
} & UseBaseBoxStylesProps

export const useBoxStyles = ({ hover, focus, ...props }: UseBoxStylesProps) => {
  const baseClassNames = useBaseBoxStyles(props)
  const hoverClassNames = useHoverStyles(hover)
  const focusClassNames = useFocusStyles(focus)

  return clsx(baseClassNames, hoverClassNames, focusClassNames)
}
