import React from 'react'
import clsx from 'clsx'

import { useColorStyles, UseColorStylesProps } from './useColorStyles'
import { UseSpaceStylesProps, useSpaceStyles } from './useSpaceStyles'
import { useFlexboxStyles, UseFlexboxStylesProps } from './useFlexboxStyles'
import {
  useTypographyStyles,
  UseTypographyStylesProps,
} from './useTypographyStyles'
import { useLayoutStyles, UseLayoutStylesProps } from './useLayoutStyles'
import { useBorderStyles, UseBorderStylesProps } from './useBorderStyles'
import { useGridStyles, UseGridStylesProps } from './useGridStyles'
import { SafeReactHTMLAttributes } from '../types'
import {
  useInteractivityStyles,
  UseInteractivityStylesProps,
} from './useInteractivityStyles'

export type BoxProps = {
  component?: React.ElementType
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
} & UseLayoutStylesProps &
  UseSpaceStylesProps &
  UseFlexboxStylesProps &
  UseTypographyStylesProps &
  UseColorStylesProps &
  UseBorderStylesProps &
  UseGridStylesProps &
  UseInteractivityStylesProps
SafeReactHTMLAttributes

export const Box = ({
  component,
  children,
  className,
  style,

  opacity,

  gap,
  gridAutoFlow,
  gridTemplateColumns,
  gridTemplateRows,
  gridColumn,
  gridRow,

  borderRadius,
  borderColor,
  border,
  borderBottom,
  borderLeft,
  borderTop,
  borderRight,
  borderX,
  borderY,
  borderStyle,

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
  color,

  fontFamily,
  fontWeight,
  fontStyle,
  lineHeight,
  textAlign,
  textTransform,
  letterSpacing,

  width,
  height,
  display,
  outline,
  userSelect,
  pointerEvents,
  overflow,
  position,

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
  const colorStyles = useColorStyles({
    opacity,
    backgroundColor,
    color,
    borderColor,
  })
  const typographyStyles = useTypographyStyles({
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
    borderRadius,
    border,
    borderY,
    borderX,
    borderRight,
    borderTop,
    borderLeft,
    borderBottom,
    borderStyle,
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
      className,
    ) || undefined

  const Tag = component ?? 'div'

  return (
    <Tag className={classes} style={style} {...htmlProps}>
      {children}
    </Tag>
  )
}
