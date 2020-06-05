import clsx from 'clsx'
import { Theme } from 'treat/theme'
import { useStyles } from 'react-treat'

import { _resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as styleRefs from './useEffectStyles.treat'

export const effectRules = {
  opacity: {
    0: 0,
    25: 0.25,
    50: 0.5,
    75: 0.75,
    100: 1,
  },
} as const

export type UseEffectStylesProps = {
  opacity?: ResponsiveProp<keyof Theme['rules']['opacity']>
}

export const useEffectStyles = ({ opacity }: UseEffectStylesProps) => {
  const styles = useStyles(styleRefs)

  return clsx(
    opacity !== undefined &&
      _resolveResponsiveProp<string | number>(opacity, styles.opacity),
  )
}
