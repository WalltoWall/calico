import React from 'react'
import clsx from 'clsx'

import {
  useBackgroundStyles,
  UseBackgroundStylesProps,
} from './useBackgroundStyles'
import { UseSpaceStylesProps, useSpaceStyles } from './useSpaceStyles'
import { useFlexboxStyles, UseFlexboxStylesProps } from './useFlexboxStyles'
import {
  useTypographyStyles,
  UseTypographyStylesProps,
} from './useTypographyStyles'
import { useLayoutStyles, UseLayoutStylesProps } from './useLayoutStyles'
import { useBorderStyles, UseBorderStylesProps } from './useBorderStyles'
import { useGridStyles, UseGridStylesProps } from './useGridStyles'
import { useEffectStyles, UseEffectStylesProps } from './useEffectStyles'
import {
  useInteractivityStyles,
  UseInteractivityStylesProps,
} from './useInteractivityStyles'
import { SafeReactHTMLAttributes } from '../types'

export type BoxProps = {
  component?: React.ElementType
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
} & UseLayoutStylesProps &
  UseSpaceStylesProps &
  UseFlexboxStylesProps &
  UseTypographyStylesProps &
  UseBackgroundStylesProps &
  UseBorderStylesProps &
  UseGridStylesProps &
  UseInteractivityStylesProps &
  UseEffectStylesProps &
  SafeReactHTMLAttributes

export const Box = ({
  component,
  children,
  className,
  style,

  gap,
  gridAutoFlow,
  gridTemplateColumns,
  gridTemplateRows,
  gridColumn,
  gridRow,

  borderColor,
  borderWidth,
  borderWidthX,
  borderWidthY,
  borderBottomWidth,
  borderLeftWidth,
  borderTopWidth,
  borderRightWidth,
  borderStyle,
  borderRadius,

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

  alignItems,
  alignContent,
  alignSelf,
  justifyItems,
  justifyContent,
  justifySelf,
  flexWrap,
  flexDirection,
  flexGrow,
  flexShrink,
  flexBasis,
  flex,

  backgroundColor,

  fontFamily,
  fontWeight,
  fontStyle,
  lineHeight,
  textAlign,
  textTransform,
  letterSpacing,
  color,

  width,
  height,
  display,
  outline,
  userSelect,
  pointerEvents,
  overflow,
  position,

  opacity,

  ...htmlProps
}: BoxProps) => {
  const spaceStyles = useSpaceStyles({
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
  })
  const flexStyles = useFlexboxStyles({
    alignItems,
    alignContent,
    alignSelf,
    justifyItems,
    justifyContent,
    justifySelf,
    flexWrap,
    flexDirection,
    flexGrow,
    flexShrink,
    flex,
    flexBasis,
  })
  const colorStyles = useBackgroundStyles({
    backgroundColor,
  })
  const typographyStyles = useTypographyStyles({
    color,
    fontFamily,
    fontWeight,
    fontStyle,
    lineHeight,
    textAlign,
    textTransform,
    letterSpacing,
  })
  const layoutStyles = useLayoutStyles({
    width,
    height,
    display,
    overflow,
    position,
  })
  const borderStyles = useBorderStyles({
    borderColor,
    borderWidth,
    borderWidthX,
    borderWidthY,
    borderBottomWidth,
    borderTopWidth,
    borderLeftWidth,
    borderStyle,
    borderRadius,
  })
  const gridStyles = useGridStyles({
    gap,
    gridAutoFlow,
    gridTemplateColumns,
    gridTemplateRows,
    gridColumn,
    gridRow,
  })
  const interactivityStyles = useInteractivityStyles({
    outline,
    pointerEvents,
    userSelect,
  })
  const effectStyles = useEffectStyles({
    opacity,
  })

  // ORing undefined will prevent empty string classes in
  // html markup
  const classes =
    clsx(
      colorStyles,
      spaceStyles,
      flexStyles,
      typographyStyles,
      layoutStyles,
      borderStyles,
      gridStyles,
      interactivityStyles,
      effectStyles,
      className,
    ) || undefined

  const Tag = component ?? 'div'

  return (
    <Tag className={classes} style={style} {...htmlProps}>
      {children}
    </Tag>
  )
}
