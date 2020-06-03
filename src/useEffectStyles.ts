import clsx from 'clsx'
import { useStyles } from 'react-treat'

import { resolveResponsiveProp } from './utils'
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
  opacity?: ResponsiveProp<keyof typeof styleRefs.opacity>
}

export const useEffectStyles = ({ opacity }: UseEffectStylesProps) => {
  const styles = useStyles(styleRefs)

  return clsx(
    opacity !== undefined &&
      resolveResponsiveProp(
        opacity,
        styles.opacity,
        styles.opacityTablet,
        styles.opacityDesktop,
        styles.opacityDesktopWide,
      ),
  )
}
