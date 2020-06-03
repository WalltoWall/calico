import clsx from 'clsx'
import { useStyles } from 'react-treat'

import * as styleRefs from './useBorderStyles.treat'

export const borderRules = {
  borderWidth: {
    none: 0,
    '1px': '1px',
  },
  borderStyle: {
    none: 'none',
    solid: 'solid',
    dotted: 'dotted',
    dashed: 'dashed',
  },
  borderRadius: {
    none: 0,
  },
} as const

export type BorderWidth = keyof typeof styleRefs.borderWidth
export type UseBorderStylesProps = {
  borderColor?: keyof typeof styleRefs.borderColor
  borderWidth?: BorderWidth
  borderWidthX?: BorderWidth
  borderWidthY?: BorderWidth
  borderTopWidth?: BorderWidth
  borderRightWidth?: BorderWidth
  borderBottomWidth?: BorderWidth
  borderLeftWidth?: BorderWidth
  borderStyle?: keyof typeof styleRefs.borderStyle
  borderRadius?: keyof typeof styleRefs.borderRadius
}

export const useBorderStyles = ({
  borderColor,
  borderWidth,
  borderWidthY,
  borderWidthX,
  borderBottomWidth,
  borderLeftWidth,
  borderRightWidth,
  borderTopWidth,
  borderStyle,
  borderRadius,
}: UseBorderStylesProps) => {
  const styles = useStyles(styleRefs)

  const resolvedBorderTopWidth = borderTopWidth || borderWidthY || borderWidth
  const resolvedBorderBottomWidth =
    borderBottomWidth || borderWidthY || borderWidth
  const resolvedBorderLeftWidth = borderLeftWidth || borderWidthX || borderWidth
  const resolvedBorderRightWidth =
    borderRightWidth || borderWidthX || borderWidth

  return clsx(
    borderColor !== undefined && styles.borderColor[borderColor],
    resolvedBorderTopWidth !== undefined &&
      styles.borderTopWidth[resolvedBorderTopWidth],
    resolvedBorderBottomWidth !== undefined &&
      styles.borderBottomWidth[resolvedBorderBottomWidth],
    resolvedBorderLeftWidth !== undefined &&
      styles.borderLeftWidth[resolvedBorderLeftWidth],
    resolvedBorderRightWidth !== undefined &&
      styles.borderRightWidth[resolvedBorderRightWidth],
    borderStyle !== undefined && styles.borderStyle[borderStyle],
    borderRadius !== undefined && styles.borderRadius[borderRadius],
  )
}
