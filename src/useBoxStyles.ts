import clsx from 'clsx'
import { Theme } from 'treat/theme'
import { useStyles } from 'react-treat'

import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as treatStyleRefs from './useBoxStyles.treat'

type BaseBoxStylesProps = {
  [K in keyof Theme['rules']]?: ResponsiveProp<keyof Theme['rules'][K]>
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

type BoxFocusProp = NotUndefOrNever<
  {
    [K in keyof Theme['variants']]?: NonNullable<
      Theme['variants'][K]
    >['focus'] extends true
      ? ResponsiveProp<keyof Theme['rules'][K]>
      : never
  }
>

const resolveClassNames = (
  props: BaseBoxStylesProps | undefined,
  styles: any,
) => {
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

export type UseBoxStylesProps = {
  hover?: BoxHoverProp
  focus?: BoxFocusProp
} & BaseBoxStylesProps

export const useBoxStyles = ({ hover, focus, ...props }: UseBoxStylesProps) => {
  const styleRefs = useStyles(treatStyleRefs)

  return clsx(
    resolveClassNames(props, styleRefs.styles),
    resolveClassNames(hover, styleRefs.hoverStyles),
    resolveClassNames(focus, styleRefs.focusStyles),
  )
}
