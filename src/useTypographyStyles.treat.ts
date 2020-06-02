import { styleMap } from 'treat'
import * as O from 'fp-ts/es6/Option'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'

export const fontFamily = styleMap((theme) =>
  pipe(
    theme.fonts,
    O.fromNullable,
    O.map(R.map((font) => font.stack)),
    O.map(mapToProperty('fontFamily')),
    O.getOrElseW(() => R.empty),
  ),
)

export const color = styleMap((theme) =>
  pipe(
    theme.colors,
    O.fromNullable,
    O.map(mapToProperty('color')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const colorTablet = styleMap((theme) =>
  pipe(
    theme.colors,
    O.fromNullable,
    O.map(mapToProperty('color')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const colorDesktop = styleMap((theme) =>
  pipe(
    theme.colors,
    O.fromNullable,
    O.map(mapToProperty('color')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const colorDesktopWide = styleMap((theme) =>
  pipe(
    theme.colors,
    O.fromNullable,
    O.map(mapToProperty('color')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const fontWeight = styleMap((theme) =>
  pipe(
    theme.rules.fontWeight,
    O.fromNullable,
    O.map(mapToProperty('fontWeight')),
    O.getOrElseW(() => R.empty),
  ),
)

export const fontStyle = styleMap((theme) =>
  pipe(
    theme.rules.fontStyle,
    O.fromNullable,
    O.map(mapToProperty('fontStyle')),
    O.getOrElseW(() => R.empty),
  ),
)

export const lineHeight = styleMap((theme) =>
  pipe(
    theme.rules.lineHeight,
    O.fromNullable,
    O.map(mapToProperty('lineHeight')),
    O.getOrElseW(() => R.empty),
  ),
)

export const textAlign = styleMap((theme) =>
  pipe(
    theme.rules.textAlign,
    O.fromNullable,
    O.map(mapToProperty('textAlign')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const textAlignTablet = styleMap((theme) =>
  pipe(
    theme.rules.textAlign,
    O.fromNullable,
    O.map(mapToProperty('textAlign')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const textAlignDesktop = styleMap((theme) =>
  pipe(
    theme.rules.textAlign,
    O.fromNullable,
    O.map(mapToProperty('textAlign')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const textAlignDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.textAlign,
    O.fromNullable,
    O.map(mapToProperty('textAlign')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const textTransform = styleMap((theme) =>
  pipe(
    theme.rules.textTransform,
    O.fromNullable,
    O.map(mapToProperty('textTransform')),
    O.getOrElseW(() => R.empty),
  ),
)

export const letterSpacing = styleMap((theme) =>
  pipe(
    theme.rules.letterSpacing,
    O.fromNullable,
    O.map(mapToProperty('letterSpacing')),
    O.getOrElseW(() => R.empty),
  ),
)
