import clsx from 'clsx'

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
}

export type UseEffectStylesProps = {
  opacity?: ResponsiveProp<keyof typeof styleRefs.opacity>
}

export const useEffectStyles = ({ opacity }: UseEffectStylesProps) => {
  return clsx(
    opacity !== undefined &&
      resolveResponsiveProp<number>(
        opacity,
        styleRefs.opacity,
        styleRefs.opacityTablet,
        styleRefs.opacityDesktop,
        styleRefs.opacityDesktopWide,
      ),
  )
}
