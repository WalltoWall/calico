import React from 'react'
import clsx from 'clsx'

import { SafeReactHTMLAttributes } from './types'
import { UseStylesProps, useStyles } from './useStyles'

export type BoxProps = {
  component?: React.ElementType
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
} & UseStylesProps &
  SafeReactHTMLAttributes

export const Box = ({
  component,
  children,
  className,
  style,

  // Layout
  display,
  objectFit,
  objectPosition,
  overflow,
  overflowX,
  overflowY,
  position,
  top,
  right,
  bottom,
  left,
  visibility,
  zIndex,

  // Flexbox
  flexDirection,
  flexWrap,
  flexBasis,
  alignItems,
  alignContent,
  alignSelf,
  justifyItems,
  justifyContent,
  justifySelf,
  flex,
  flexGrow,
  flexShrink,
  order,

  // Grid
  gridTemplateColumns,
  gridColumnStart,
  gridColumnEnd,
  gridColumn,
  gridTemplateRows,
  gridRowStart,
  gridRowEnd,
  gridRow,
  gap,
  columnGap,
  rowGap,
  gridAutoFlow,

  // Spacing
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,

  // Sizing
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,

  // Typography
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  listStyleType,
  listStylePosition,
  textAlign,
  color,
  textDecoration,
  textTransform,
  verticalAlign,
  whiteSpace,
  wordBreak,

  // Backgrounds
  backgroundAttachment,
  backgroundColor,
  backgroundPosition,
  backgroundPositionX,
  backgroundPositionY,
  backgroundRepeat,
  backgroundSize,

  // Borders
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderTopWidth,
  borderRightWidth,
  borderColor,
  borderStyle,

  // Effects
  boxShadow,
  opacity,

  // Transitions
  transitionProperty,
  transitionDuration,
  transitionTimingFunction,
  transitionDelay,

  // Transforms
  transform,
  transformOrigin,
  perspective,
  scale,
  rotate,

  // Interactivity
  appearance,
  cursor,
  outline,
  pointerEvents,
  resize,
  userSelect,

  ...htmlProps
}: BoxProps) => {
  const resolvedClassNames = useStyles({
    display,
    objectFit,
    objectPosition,
    overflow,
    overflowX,
    overflowY,
    position,
    top,
    right,
    bottom,
    left,
    visibility,
    zIndex,
    flexDirection,
    flexWrap,
    flexBasis,
    alignItems,
    alignContent,
    alignSelf,
    justifyItems,
    justifyContent,
    justifySelf,
    flex,
    flexGrow,
    flexShrink,
    order,
    gridTemplateColumns,
    gridColumnStart,
    gridColumnEnd,
    gridColumn,
    gridTemplateRows,
    gridRowStart,
    gridRowEnd,
    gridRow,
    gap,
    columnGap,
    rowGap,
    gridAutoFlow,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    letterSpacing,
    lineHeight,
    listStyleType,
    listStylePosition,
    textAlign,
    color,
    textDecoration,
    textTransform,
    verticalAlign,
    whiteSpace,
    wordBreak,
    backgroundAttachment,
    backgroundColor,
    backgroundPosition,
    backgroundPositionX,
    backgroundPositionY,
    backgroundRepeat,
    backgroundSize,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderTopWidth,
    borderRightWidth,
    borderColor,
    borderStyle,
    boxShadow,
    opacity,
    transitionProperty,
    transitionDuration,
    transitionTimingFunction,
    transitionDelay,
    transform,
    transformOrigin,
    perspective,
    scale,
    rotate,
    appearance,
    cursor,
    outline,
    pointerEvents,
    resize,
    userSelect,
  })

  const Tag = component ?? 'div'

  return (
    <Tag
      className={clsx(resolvedClassNames, className) || undefined}
      style={style}
      {...htmlProps}
    >
      {children}
    </Tag>
  )
}
