import clsx from 'clsx'

import * as styleRefs from './useLayoutStyles.treat'
import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

export type UseSizingStylesProps = {
  width?: ResponsiveProp<keyof typeof styleRefs.width>
  maxWidth?: ResponsiveProp<keyof typeof styleRefs.maxWidth>
  height?: ResponsiveProp<keyof typeof styleRefs.height>
}

export const useSizingStyles = ({
  width,
  maxWidth,
  height,
}: UseSizingStylesProps) => {
  return clsx(
    width !== undefined &&
      resolveResponsiveProp(
        width,
        styleRefs.width,
        styleRefs.widthTablet,
        styleRefs.widthDesktop,
        styleRefs.widthDesktopWide,
      ),
    maxWidth !== undefined &&
      resolveResponsiveProp(
        maxWidth,
        styleRefs.maxWidth,
        styleRefs.maxWidthTablet,
        styleRefs.maxWidthDesktop,
        styleRefs.maxWidthDesktopWide,
      ),
    height !== undefined &&
      resolveResponsiveProp<string | number>(
        height,
        styleRefs.height,
        styleRefs.heightTablet,
        styleRefs.heightDesktop,
        styleRefs.heightDesktopWide,
      ),
  )
}
