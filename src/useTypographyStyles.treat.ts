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
  pipe(theme.rules.fontWeight, mapToProperty('fontWeight')),
)

export const fontStyle = styleMap((theme) =>
  pipe(theme.rules.fontStyle, mapToProperty('fontStyle')),
)

export const lineHeight = styleMap((theme) =>
  pipe(theme.rules.lineHeight, mapToProperty('lineHeight')),
)

export const textAlign = styleMap((theme) =>
  pipe(
    theme.rules.textAlign,
    mapToProperty('textAlign'),
    mapToResponsive('mobile', theme),
  ),
)
export const textAlignTablet = styleMap((theme) =>
  pipe(
    theme.rules.textAlign,
    mapToProperty('textAlign'),
    mapToResponsive('tablet', theme),
  ),
)
export const textAlignDesktop = styleMap((theme) =>
  pipe(
    theme.rules.textAlign,
    mapToProperty('textAlign'),
    mapToResponsive('desktop', theme),
  ),
)
export const textAlignDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.textAlign,
    mapToProperty('textAlign'),
    mapToResponsive('desktopWide', theme),
  ),
)

export const textTransform = styleMap((theme) =>
  pipe(theme.rules.textTransform, mapToProperty('textTransform')),
)

export const letterSpacing = styleMap((theme) =>
  pipe(theme.rules.letterSpacing, mapToProperty('letterSpacing')),
)
