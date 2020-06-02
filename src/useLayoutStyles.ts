import clsx from 'clsx'

import * as styleRefs from './useLayoutStyles.treat'
import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'
import { Height } from './useLayoutStyles.treat'

export type UseLayoutStylesProps = {
  width?: ResponsiveProp<keyof typeof styleRefs.width>
  maxWidth?: ResponsiveProp<keyof typeof styleRefs.maxWidth>
  height?: ResponsiveProp<Height>
  display?: ResponsiveProp<keyof typeof styleRefs.display>
  overflow?: keyof typeof styleRefs.overflow
  position?: keyof typeof styleRefs.position
}

export const useLayoutStyles = ({
  width,
  maxWidth,
  height,
  display,
  overflow,
  position,
}: UseLayoutStylesProps) => {
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
    display !== undefined &&
      resolveResponsiveProp(
        display,
        styleRefs.display,
        styleRefs.displayTablet,
        styleRefs.displayDesktop,
        styleRefs.displayDesktopWide,
      ),
    overflow !== undefined && styleRefs.overflow[overflow],
    position !== undefined && styleRefs.position[position],
  )
}
