import clsx from 'clsx'

import * as styleRefs from './useColorStyles.treat'
import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

export type UseColorStylesProps = {
  backgroundColor?: keyof typeof styleRefs.backgroundColor
  color?: ResponsiveProp<keyof typeof styleRefs.backgroundColor>
}

export const useColorStyles = ({
  backgroundColor,
  color,
}: UseColorStylesProps) => {
  return clsx(
    backgroundColor !== undefined && styleRefs.backgroundColor[backgroundColor],
    color !== undefined &&
      resolveResponsiveProp(
        color,
        styleRefs.color,
        styleRefs.colorTablet,
        styleRefs.colorDesktop,
        styleRefs.colorDesktopWide,
      ),
  )
}
