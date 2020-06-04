import clsx from 'clsx'
import { useStyles } from 'react-treat'

import { ResponsiveProp } from './types'
import { resolveResponsiveProp } from './utils'

import * as styleRefs from './useTypographyStyles.treat'

export const typographyRules = {
  fontWeight: {
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800,
    black: 900,
  },
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
  letterSpacing: {
    normal: 'normal',
    none: 0,
  },
  listStyle: {
    none: 'none',
    disc: 'disc',
    decimal: 'decimal',
  },
} as const

export type UseTypographyStylesProps = {
  fontFamily?: keyof typeof styleRefs.fontFamily
  fontWeight?: keyof typeof styleRefs.fontWeight
  fontStyle?: keyof typeof styleRefs.fontStyle
  lineHeight?: keyof typeof styleRefs.lineHeight
  textAlign?: ResponsiveProp<keyof typeof styleRefs.textAlign>
  textTransform?: keyof typeof styleRefs.textTransform
  letterSpacing?: keyof typeof styleRefs.letterSpacing
  color?: ResponsiveProp<keyof typeof styleRefs.color>
  listStyle?: keyof typeof styleRefs.listStyle
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
  listStyle,
}: UseTypographyStylesProps) => {
  const styles = useStyles(styleRefs)

  return clsx(
    fontFamily !== undefined && styles.fontFamily[fontFamily],
    fontWeight !== undefined && styles.fontWeight[fontWeight],
    fontStyle !== undefined && styles.fontStyle[fontStyle],
    lineHeight !== undefined && styles.lineHeight[lineHeight],
    textAlign !== undefined &&
      resolveResponsiveProp(
        textAlign,
        styles.textAlign,
        styles.textAlignTablet,
        styles.textAlignDesktop,
        styles.textAlignDesktopWide,
      ),
    textTransform !== undefined && styles.textTransform[textTransform],
    letterSpacing !== undefined && styles.letterSpacing[letterSpacing],
    listStyle !== undefined && styles.listStyle[listStyle],
    color !== undefined &&
      resolveResponsiveProp(
        color,
        styles.color,
        styles.colorTablet,
        styles.colorDesktop,
        styles.colorDesktopWide,
      ),
  )
}
