import clsx from 'clsx'
import { useStyles } from 'react-treat'
import { Theme } from 'treat/theme'

import { ResponsiveProp } from './types'
import { resolveResponsiveProp } from './utils'

import * as styleRefs from './useSpaceStyles.treat'

export type Space = keyof Theme['space']
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
  const styles = useStyles(styleRefs)

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
        styles.margin.top,
        styles.marginTablet.top,
        styles.marginDesktop.top,
        styles.marginDesktopWide.top,
      ),
    resolvedMarginBottom !== undefined &&
      resolveResponsiveProp(
        resolvedMarginBottom,
        styles.margin.bottom,
        styles.marginTablet.bottom,
        styles.marginDesktop.bottom,
        styles.marginDesktopWide.bottom,
      ),
    resolvedMarginLeft !== undefined &&
      resolveResponsiveProp(
        resolvedMarginLeft,
        styles.margin.left,
        styles.marginTablet.left,
        styles.marginDesktop.left,
        styles.marginDesktopWide.left,
      ),
    resolvedMarginRight !== undefined &&
      resolveResponsiveProp(
        resolvedMarginRight,
        styles.margin.right,
        styles.marginTablet.right,
        styles.marginDesktop.right,
        styles.marginDesktopWide.right,
      ),
    resolvedPaddingTop !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingTop,
        styles.padding.top,
        styles.paddingTablet.top,
        styles.paddingDesktop.top,
        styles.paddingDesktopWide.top,
      ),
    resolvedPaddingBottom !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingBottom,
        styles.padding.bottom,
        styles.paddingTablet.bottom,
        styles.paddingDesktop.bottom,
        styles.paddingDesktopWide.bottom,
      ),
    resolvedPaddingLeft !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingLeft,
        styles.padding.left,
        styles.paddingTablet.left,
        styles.paddingDesktop.left,
        styles.paddingDesktopWide.left,
      ),
    resolvedPaddingRight !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingRight,
        styles.padding.right,
        styles.paddingTablet.right,
        styles.paddingDesktop.right,
        styles.paddingDesktopWide.right,
      ),
  )
}
