import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'
import { map } from 'fp-ts/es6/Record'

import { mapToProperty, mapToResponsive } from './utils'

import { theme } from './theme'

export const fontFamily = pipe(
  theme.fonts,
  map((font) => font.stack),
  mapToProperty('fontFamily'),
  styleMap,
)

export const fontWeight = pipe(
  theme.fontWeights,
  mapToProperty('fontWeight'),
  styleMap,
)

const fontStyleRules = {
  normal: 'normal',
  italic: 'italic',
}
export const fontStyle = pipe(
  fontStyleRules,
  mapToProperty('fontStyle'),
  styleMap,
)

export const lineHeight = pipe(
  theme.lineHeights,
  mapToProperty('lineHeight'),
  styleMap,
)

const textAlignRules = {
  left: 'left',
  center: 'center',
  right: 'right',
}
export const textAlign = pipe(
  textAlignRules,
  mapToProperty('textAlign'),
  mapToResponsive('mobile', theme),
  styleMap,
)
export const textAlignTablet = pipe(
  textAlignRules,
  mapToProperty('textAlign'),
  mapToResponsive('tablet', theme),
  styleMap,
)
export const textAlignDesktop = pipe(
  textAlignRules,
  mapToProperty('textAlign'),
  mapToResponsive('desktop', theme),
  styleMap,
)
export const textAlignDesktopWide = pipe(
  textAlignRules,
  mapToProperty('textAlign'),
  mapToResponsive('desktopWide', theme),
  styleMap,
)

const textTransformRules = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
}
export const textTransform = pipe(
  textTransformRules,
  mapToProperty('textTransform'),
  styleMap,
)

export const letterSpacing = pipe(
  theme.letterSpacings,
  mapToProperty('letterSpacing'),
  styleMap,
)
