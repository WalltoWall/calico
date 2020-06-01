import clsx from 'clsx'

import * as styleRefs from './useBorderStyles.treat'
import { Theme } from './theme'

export type Border = keyof Theme['borderWidths']

export type UseBorderStylesProps = {
  borderRadius?: keyof typeof styleRefs.borderRadius
  border?: Border
  borderTop?: Border
  borderRight?: Border
  borderBottom?: Border
  borderLeft?: Border
  borderY?: Border
  borderX?: Border
  borderStyle?: keyof typeof styleRefs.borderStyle
}

export const useBorderStyles = ({
  borderRadius,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  borderX,
  borderY,
  borderStyle,
}: UseBorderStylesProps) => {
  const resolvedBorderTopWidth = borderTop || borderY || border
  const resolvedBorderBottomWidth = borderBottom || borderY || border
  const resolvedBorderLeftWidth = borderLeft || borderX || border
  const resolvedBorderRightWidth = borderRight || borderX || border

  return clsx(
    borderRadius !== undefined && styleRefs.borderRadius[borderRadius],
    resolvedBorderTopWidth !== undefined &&
      styleRefs.borderTop[resolvedBorderTopWidth],
    resolvedBorderBottomWidth !== undefined &&
      styleRefs.borderBottom[resolvedBorderBottomWidth],
    resolvedBorderLeftWidth !== undefined &&
      styleRefs.borderLeft[resolvedBorderLeftWidth],
    resolvedBorderRightWidth !== undefined &&
      styleRefs.borderRight[resolvedBorderRightWidth],
    borderStyle !== undefined && styleRefs.borderStyle[borderStyle],
  )
}
