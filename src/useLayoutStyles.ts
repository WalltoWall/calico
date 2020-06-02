import clsx from 'clsx'

import * as styleRefs from './useLayoutStyles.treat'
import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

export type UseLayoutStylesProps = {
  display?: ResponsiveProp<keyof typeof styleRefs.display>
  overflow?: keyof typeof styleRefs.overflow
  overflowX?: keyof typeof styleRefs.overflowX
  overflowY?: keyof typeof styleRefs.overflowY
  position?: keyof typeof styleRefs.position
}

export const useLayoutStyles = ({
  display,
  overflow,
  overflowX,
  overflowY,
  position,
}: UseLayoutStylesProps) => {
  return clsx(
    display !== undefined &&
      resolveResponsiveProp(
        display,
        styleRefs.display,
        styleRefs.displayTablet,
        styleRefs.displayDesktop,
        styleRefs.displayDesktopWide,
      ),
    overflow !== undefined && styleRefs.overflow[overflow],
    overflowX !== undefined && styleRefs.overflowX[overflowX],
    overflowY !== undefined && styleRefs.overflowY[overflowY],
    position !== undefined && styleRefs.position[position],
  )
}
