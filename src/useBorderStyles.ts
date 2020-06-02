import clsx from 'clsx'

import * as styleRefs from './useBorderStyles.treat'

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
  const resolvedBorderTopWidth = borderTopWidth || borderWidthY || borderWidth
  const resolvedBorderBottomWidth =
    borderBottomWidth || borderWidthY || borderWidth
  const resolvedBorderLeftWidth = borderLeftWidth || borderWidthX || borderWidth
  const resolvedBorderRightWidth =
    borderRightWidth || borderWidthX || borderWidth

  return clsx(
    borderColor !== undefined && styleRefs.borderColor[borderColor],
    resolvedBorderTopWidth !== undefined &&
      styleRefs.borderTopWidth[resolvedBorderTopWidth],
    resolvedBorderBottomWidth !== undefined &&
      styleRefs.borderBottomWidth[resolvedBorderBottomWidth],
    resolvedBorderLeftWidth !== undefined &&
      styleRefs.borderLeftWidth[resolvedBorderLeftWidth],
    resolvedBorderRightWidth !== undefined &&
      styleRefs.borderRightWidth[resolvedBorderRightWidth],
    borderStyle !== undefined && styleRefs.borderStyle[borderStyle],
    borderRadius !== undefined && styleRefs.borderRadius[borderRadius],
  )
}
