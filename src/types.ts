import { UseSpaceStylesProps } from './useSpaceStyles'
import { UseLayoutStylesProps } from './useLayoutStyles'
import { UseColorStylesProps } from './useColorStyles'
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
type ColorProps = Omit<UseColorStylesProps, 'borderColor'>
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
