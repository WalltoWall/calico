import clsx from 'clsx'

import * as styleRefs from './useSpaceStyles.treat'
import { ResponsiveProp } from './types'
import { resolveResponsiveProp } from './utils'
import { CalicoTheme } from './theme'

export type Space = keyof CalicoTheme['space']
export type ResponsiveSpace = ResponsiveProp<Space>

export type UseSpaceStylesProps = {
  margin?: ResponsiveSpace
  marginX?: ResponsiveSpace
  marginY?: ResponsiveSpace
  marginTop?: ResponsiveSpace
  marginBottom?: ResponsiveSpace
  marginLeft?: ResponsiveSpace
  marginRight?: ResponsiveSpace

  padding?: ResponsiveSpace
  paddingX?: ResponsiveSpace
  paddingY?: ResponsiveSpace
  paddingTop?: ResponsiveSpace
  paddingBottom?: ResponsiveSpace
  paddingLeft?: ResponsiveSpace
  paddingRight?: ResponsiveSpace
}

export const useSpaceStyles = ({
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,

  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: UseSpaceStylesProps) => {
  const resolvedMarginTop = marginTop || marginY || margin
  const resolvedMarginBottom = marginBottom || marginY || margin
  const resolvedMarginLeft = marginLeft || marginX || margin
  const resolvedMarginRight = marginRight || marginX || margin

  const resolvedPaddingTop = paddingTop || paddingY || padding
  const resolvedPaddingBottom = paddingBottom || paddingY || padding
  const resolvedPaddingLeft = paddingLeft || paddingX || padding
  const resolvedPaddingRight = paddingRight || paddingX || padding

  return clsx(
    resolvedMarginTop !== undefined &&
      resolveResponsiveProp(
        resolvedMarginTop,
        styleRefs.margin.top,
        styleRefs.marginTablet.top,
        styleRefs.marginDesktop.top,
        styleRefs.marginDesktopWide.top,
      ),
    resolvedMarginBottom !== undefined &&
      resolveResponsiveProp(
        resolvedMarginBottom,
        styleRefs.margin.bottom,
        styleRefs.marginTablet.bottom,
        styleRefs.marginDesktop.bottom,
        styleRefs.marginDesktopWide.bottom,
      ),
    resolvedMarginLeft !== undefined &&
      resolveResponsiveProp(
        resolvedMarginLeft,
        styleRefs.margin.left,
        styleRefs.marginTablet.left,
        styleRefs.marginDesktop.left,
        styleRefs.marginDesktopWide.left,
      ),
    resolvedMarginRight !== undefined &&
      resolveResponsiveProp(
        resolvedMarginRight,
        styleRefs.margin.right,
        styleRefs.marginTablet.right,
        styleRefs.marginDesktop.right,
        styleRefs.marginDesktopWide.right,
      ),
    resolvedPaddingTop !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingTop,
        styleRefs.padding.top,
        styleRefs.paddingTablet.top,
        styleRefs.paddingDesktop.top,
        styleRefs.paddingDesktopWide.top,
      ),
    resolvedPaddingBottom !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingBottom,
        styleRefs.padding.bottom,
        styleRefs.paddingTablet.bottom,
        styleRefs.paddingDesktop.bottom,
        styleRefs.paddingDesktopWide.bottom,
      ),
    resolvedPaddingLeft !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingLeft,
        styleRefs.padding.left,
        styleRefs.paddingTablet.left,
        styleRefs.paddingDesktop.left,
        styleRefs.paddingDesktopWide.left,
      ),
    resolvedPaddingRight !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingRight,
        styleRefs.padding.right,
        styleRefs.paddingTablet.right,
        styleRefs.paddingDesktop.right,
        styleRefs.paddingDesktopWide.right,
      ),
  )
}
