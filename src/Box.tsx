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
import { useSizingStyles, UseSizingStylesProps } from './useSizingStyles'
import {
  useTransitionStyles,
  UseTransitionStylesProps,
} from './useTransitionStyles'
import { SafeReactHTMLAttributes } from './types'

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
  UseSizingStylesProps &
  UseTransitionStylesProps &
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
  backgroundSize,
  backgroundPositionX,
  backgroundPositionY,
  backgroundRepeat,

  fontFamily,
  fontWeight,
  fontStyle,
  lineHeight,
  textAlign,
  textTransform,
  letterSpacing,
  color,

  width,
  maxWidth,
  height,

  display,
  outline,
  userSelect,
  pointerEvents,
  overflow,
  overflowX,
  overflowY,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,

  opacity,

  transitionDuration,
  transitionTimingFunction,

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
    backgroundPositionX,
    backgroundPositionY,
    backgroundRepeat,
    backgroundSize,
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
  const sizingStyles = useSizingStyles({
    width,
    maxWidth,
    height,
  })
  const transitionStyles = useTransitionStyles({
    transitionDuration,
    transitionTimingFunction,
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
      sizingStyles,
      transitionStyles,
      className,
    ) || undefined

  const Tag = component ?? 'div'

  return (
    <Tag className={classes} style={style} {...htmlProps}>
      {children}
    </Tag>
  )
}
