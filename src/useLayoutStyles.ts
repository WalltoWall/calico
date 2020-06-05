import clsx from 'clsx'
import { useStyles } from 'react-treat'

import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as styleRefs from './useLayoutStyles.treat'

export const layoutRules = {
  display: {
    none: 'none',
    inline: 'inline',
    block: 'block',
    inlineBlock: 'inline-block',
    flex: 'flex',
    inlineFlex: 'inline-flex',
    grid: 'grid',
    inlineGrid: 'inline-grid',
    listItem: 'list-item',
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
  top: {
    auto: 'auto',
    0: 0,
  },
  right: {
    auto: 'auto',
    0: 0,
  },
  bottom: {
    auto: 'auto',
    0: 0,
  },
  left: {
    auto: 'auto',
    0: 0,
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
} as const

export type UseLayoutStylesProps = {
  display?: ResponsiveProp<keyof typeof styleRefs.display>
  overflow?: keyof typeof styleRefs.overflow
  overflowX?: keyof typeof styleRefs.overflowX
  overflowY?: keyof typeof styleRefs.overflowY
  position?: ResponsiveProp<keyof typeof styleRefs.position>
  top?: ResponsiveProp<keyof typeof styleRefs.top>
  right?: ResponsiveProp<keyof typeof styleRefs.right>
  bottom?: ResponsiveProp<keyof typeof styleRefs.bottom>
  left?: ResponsiveProp<keyof typeof styleRefs.left>
  zIndex?: keyof typeof styleRefs.zIndex
}

export const useLayoutStyles = ({
  display,
  overflow,
  overflowX,
  overflowY,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
}: UseLayoutStylesProps) => {
  const styles = useStyles(styleRefs)

  return clsx(
    display !== undefined &&
      resolveResponsiveProp(
        display,
        styles.display,
        styles.displayTablet,
        styles.displayDesktop,
        styles.displayDesktopWide,
      ),
    overflow !== undefined && styles.overflow[overflow],
    overflowX !== undefined && styles.overflowX[overflowX],
    overflowY !== undefined && styles.overflowY[overflowY],
    position !== undefined &&
      resolveResponsiveProp(
        position,
        styles.position,
        styles.positionTablet,
        styles.positionDesktop,
        styles.positionDesktopWide,
      ),
    top !== undefined &&
      resolveResponsiveProp(
        top,
        styles.top,
        styles.topTablet,
        styles.topDesktop,
        styles.topDesktopWide,
      ),
    right !== undefined &&
      resolveResponsiveProp(
        right,
        styles.right,
        styles.rightTablet,
        styles.rightDesktop,
        styles.rightDesktopWide,
      ),
    bottom !== undefined &&
      resolveResponsiveProp(
        bottom,
        styles.bottom,
        styles.bottomTablet,
        styles.bottomDesktop,
        styles.bottomDesktopWide,
      ),
    left !== undefined &&
      resolveResponsiveProp(
        left,
        styles.left,
        styles.leftTablet,
        styles.leftDesktop,
        styles.leftDesktopWide,
      ),
    zIndex !== undefined && styles.zIndex[zIndex],
  )
}
