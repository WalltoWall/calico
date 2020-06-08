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

export const useHoverStyles = (props: UseStylesProps = {}) => {
  const styleRefs = useTreatStyles(treatStyleRefs)

  return clsx(resolveClassNames(props, styleRefs.hoverStyles))
}

export const useFocusStyles = (props: UseStylesProps = {}) => {
  const styleRefs = useTreatStyles(treatStyleRefs)

  return clsx(resolveClassNames(props, styleRefs.focusStyles))
}
