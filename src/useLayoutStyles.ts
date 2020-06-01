import clsx from 'clsx'

import * as styleRefs from './useLayoutStyles.treat'
import { ResponsiveProp, resolveResponsiveProp } from './responsive'
import { Height } from './useLayoutStyles.treat'

export type UseLayoutStylesProps = {
  width?: ResponsiveProp<keyof typeof styleRefs.width>
  maxWidth?: ResponsiveProp<keyof typeof styleRefs.maxWidth>
  height?: ResponsiveProp<Height>
  display?: ResponsiveProp<keyof typeof styleRefs.display>
  outline?: keyof typeof styleRefs.outline
  userSelect?: keyof typeof styleRefs.userSelect
  pointerEvents?: ResponsiveProp<keyof typeof styleRefs.pointerEvents>
  overflow?: keyof typeof styleRefs.overflow
  position?: keyof typeof styleRefs.position
}

export const useLayoutStyles = ({
  width,
  maxWidth,
  height,
  display,
  outline,
  userSelect,
  pointerEvents,
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
    outline !== undefined && styleRefs.outline[outline],
    userSelect !== undefined && styleRefs.userSelect[userSelect],
    pointerEvents !== undefined &&
      resolveResponsiveProp(
        pointerEvents,
        styleRefs.pointerEvents,
        styleRefs.pointerEventsTablet,
        styleRefs.pointerEventsDesktop,
        styleRefs.pointerEventsDesktopWide,
      ),
    overflow !== undefined && styleRefs.overflow[overflow],
    position !== undefined && styleRefs.position[position],
  )
}
