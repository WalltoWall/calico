import clsx from 'clsx'

import * as styleRefs from './useColorStyles.treat'
import { ResponsiveProp, resolveResponsiveProp } from './responsive'
import { Opacity } from './useColorStyles.treat'

export type UseColorStylesProps = {
  backgroundColor?: keyof typeof styleRefs.backgroundColor
  color?: ResponsiveProp<keyof typeof styleRefs.backgroundColor>
  borderColor?: keyof typeof styleRefs.borderColor
  opacity?: ResponsiveProp<Opacity>
}

export const useColorStyles = ({
  backgroundColor,
  color,
  borderColor,
  opacity,
}: UseColorStylesProps) => {
  return clsx(
    backgroundColor !== undefined && styleRefs.backgroundColor[backgroundColor],
    borderColor !== undefined && styleRefs.borderColor[borderColor],
    color !== undefined &&
      resolveResponsiveProp(
        color,
        styleRefs.color,
        styleRefs.colorTablet,
        styleRefs.colorDesktop,
        styleRefs.colorDesktopWide,
      ),
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
