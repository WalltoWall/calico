import clsx from 'clsx'

import * as styleRefs from './useTypographyStyles.treat'
import { ResponsiveProp } from './types'
import { resolveResponsiveProp } from './utils'

export const typographyRules = {
  fontWeight: {},
  fontStyle: {
    normal: 'normal',
    italic: 'italic',
  },
  lineHeight: {},
  textAlign: {
    left: 'left',
    center: 'center',
    right: 'right',
  },
  textTransform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
  },
  letterSpacing: {},
}

export type UseTypographyStylesProps = {
  fontFamily?: keyof typeof styleRefs.fontFamily
  fontWeight?: keyof typeof styleRefs.fontWeight
  fontStyle?: keyof typeof styleRefs.fontStyle
  lineHeight?: keyof typeof styleRefs.lineHeight
  textAlign?: ResponsiveProp<keyof typeof styleRefs.textAlign>
  textTransform?: keyof typeof styleRefs.textTransform
  letterSpacing?: keyof typeof styleRefs.letterSpacing
  color?: ResponsiveProp<keyof typeof styleRefs.color>
}

export const useTypographyStyles = ({
  fontFamily,
  fontWeight,
  fontStyle,
  lineHeight,
  textAlign,
  textTransform,
  letterSpacing,
  color,
}: UseTypographyStylesProps) => {
  return clsx(
    fontFamily !== undefined && styleRefs.fontFamily[fontFamily],
    fontWeight !== undefined && styleRefs.fontWeight[fontWeight],
    fontStyle !== undefined && styleRefs.fontStyle[fontStyle],
    lineHeight !== undefined && styleRefs.lineHeight[lineHeight],
    textAlign !== undefined &&
      resolveResponsiveProp(
        textAlign,
        styleRefs.textAlign,
        styleRefs.textAlignTablet,
        styleRefs.textAlignDesktop,
        styleRefs.textAlignDesktopWide,
      ),
    textTransform !== undefined && styleRefs.textTransform[textTransform],
    letterSpacing !== undefined && styleRefs.letterSpacing[letterSpacing],
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
