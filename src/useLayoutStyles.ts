import clsx from 'clsx'

import * as styleRefs from './useLayoutStyles.treat'
import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

export const layoutRules = {
  display: {
    block: 'block',
    inline: 'inline',
    none: 'none',
    inlineBlock: 'inline-block',
    flex: 'flex',
    grid: 'grid',
  },
  overflow: {
    auto: 'auto',
    hidden: 'hidden',
    scroll: 'scroll',
    scrollX: 'scrollX',
    scrollY: 'scrollY',
  },
  position: {
    static: 'static',
    relative: 'relative',
    absolute: 'absolute',
    fixed: 'fixed',
    sticky: 'sticky',
  },
  zIndex: {
    auto: 'auto',
    [-1]: -1,
    0: 1,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  },
}

export type UseLayoutStylesProps = {
  display?: ResponsiveProp<keyof typeof styleRefs.display>
  overflow?: keyof typeof styleRefs.overflow
  overflowX?: keyof typeof styleRefs.overflowX
  overflowY?: keyof typeof styleRefs.overflowY
  position?: keyof typeof styleRefs.position
  zIndex?: keyof typeof styleRefs.zIndex
}

export const useLayoutStyles = ({
  display,
  overflow,
  overflowX,
  overflowY,
  position,
  zIndex,
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
    zIndex !== undefined && styleRefs.zIndex[zIndex],
  )
}
