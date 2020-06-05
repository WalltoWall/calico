import clsx from 'clsx'
import { Theme } from 'treat/theme'
import { useStyles as useTreatStyles } from 'react-treat'

import { _resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'
import * as treatStyleRefs from './useStyles.treat'

export type UseStylesProps = {
  [K in keyof Theme['rules']]?: ResponsiveProp<keyof Theme['rules'][K]>
}

export const useStyles = (props: UseStylesProps) => {
  const styleRefs = useTreatStyles(treatStyleRefs)

  let styleArr = []
  for (const key in props) {
    const value = props[key as keyof Theme['rules']]
    if (!value) continue

    styleArr.push(
      _resolveResponsiveProp<string | number>(
        value,
        styleRefs.styles[key as keyof Theme['rules']],
      ),
    )
  }

  return clsx(styleArr)
}
