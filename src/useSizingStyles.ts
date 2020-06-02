import clsx from 'clsx'

import * as styleRefs from './useLayoutStyles.treat'
import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

export const sizingRules = {
  width: {
    auto: 'auto',
    full: '100%',
    '1px': '1px',
    '1/12': `${(1 / 12) * 100}%`,
    '2/12': `${(2 / 12) * 100}%`,
    '3/12': `${(3 / 12) * 100}%`,
    '4/12': `${(4 / 12) * 100}%`,
    '5/12': `${(5 / 12) * 100}%`,
    '6/12': `${(6 / 12) * 100}%`,
    '7/12': `${(7 / 12) * 100}%`,
    '8/12': `${(8 / 12) * 100}%`,
    '9/12': `${(9 / 12) * 100}%`,
    '10/12': `${(10 / 12) * 100}%`,
    '11/12': `${(11 / 12) * 100}%`,
  },
  height: {
    auto: 'auto',
    full: '100%',
    '1px': '1px',
  },
}

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
