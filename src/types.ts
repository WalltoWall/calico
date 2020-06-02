import React from 'react'

import { UseSpaceStylesProps } from './useSpaceStyles'
import { UseLayoutStylesProps } from './useLayoutStyles'
import { UseBackgroundStylesProps } from './useBackgroundStyles'
import { UseFlexboxStylesProps } from './useFlexboxStyles'
import { UseBorderStylesProps } from './useBorderStyles'
import { UseGridStylesProps } from './useGridStyles'
import { UseInteractivityStylesProps } from './useInteractivityStyles'

export type ResponsiveProp<AtomName> =
  | AtomName
  | Readonly<[AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName]>
  | Readonly<[AtomName, AtomName, AtomName, AtomName]>

type MarginProps = Pick<
  UseSpaceStylesProps,
  | 'margin'
  | 'marginX'
  | 'marginY'
  | 'marginTop'
  | 'marginLeft'
  | 'marginRight'
  | 'marginBottom'
>
type LayoutProps = Omit<UseLayoutStylesProps, 'height' | 'width' | 'maxWidth'>
type ColorProps = Omit<UseBackgroundStylesProps, 'borderColor'>
type FlexProps = UseFlexboxStylesProps
type BorderProps = Pick<UseBorderStylesProps, 'borderRadius'>
type GridProps = UseGridStylesProps
type InteractivityProps = UseInteractivityStylesProps

export type PrimitiveStyleProps = MarginProps &
  LayoutProps &
  ColorProps &
  FlexProps &
  BorderProps &
  GridProps &
  InteractivityProps

type ConflictingHtmlProps =
  | 'color'
  | 'style'
  | 'className'
  | 'width'
  | 'height'
  | 'css'

export type SafeReactHTMLAttributes = Omit<
  React.AllHTMLAttributes<'div'>,
  ConflictingHtmlProps
> & {
  loading?: string
}
