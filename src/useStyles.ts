import clsx from 'clsx'
import { useStyles as useTreatStyles } from 'react-treat'
import { StandardProperties } from 'csstype'

import { _resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as styleRefs from './useStyles.treat'

export type UseStylesProps = {
  [K in keyof StandardProperties]: ResponsiveProp<
    keyof typeof styleRefs.styles[K]['mobile']
  >
}

export const useStyles = (props: UseStylesProps) => {
  const styles = useTreatStyles(styleRefs)

  return clsx()
}
