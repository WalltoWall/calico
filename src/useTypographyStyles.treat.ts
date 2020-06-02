import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'
import { map } from 'fp-ts/es6/Record'

import { mapToProperty, mapToResponsive } from './utils'

export const fontFamily = styleMap((theme) =>
  pipe(
    theme.fonts,
    map((font) => font.stack),
    mapToProperty('fontFamily'),
  ),
)

export const fontWeight = styleMap((theme) =>
  pipe(theme.fontWeights, mapToProperty('fontWeight')),
)

const fontStyleRules = {
  normal: 'normal',
  italic: 'italic',
}
export const fontStyle = styleMap((theme) =>
  pipe(fontStyleRules, mapToProperty('fontStyle')),
)

export const lineHeight = styleMap((theme) =>
  pipe(theme.lineHeights, mapToProperty('lineHeight')),
)

const textAlignRules = {
  left: 'left',
  center: 'center',
  right: 'right',
}
export const textAlign = styleMap((theme) =>
  pipe(
    textAlignRules,
    mapToProperty('textAlign'),
    mapToResponsive('mobile', theme),
  ),
)
export const textAlignTablet = styleMap((theme) =>
  pipe(
    textAlignRules,
    mapToProperty('textAlign'),
    mapToResponsive('tablet', theme),
  ),
)
export const textAlignDesktop = styleMap((theme) =>
  pipe(
    textAlignRules,
    mapToProperty('textAlign'),
    mapToResponsive('desktop', theme),
  ),
)
export const textAlignDesktopWide = styleMap((theme) =>
  pipe(
    textAlignRules,
    mapToProperty('textAlign'),
    mapToResponsive('desktopWide', theme),
  ),
)

const textTransformRules = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
}
export const textTransform = styleMap((theme) =>
  pipe(textTransformRules, mapToProperty('textTransform')),
)

export const letterSpacing = styleMap((theme) =>
  pipe(theme.letterSpacings, mapToProperty('letterSpacing')),
)
