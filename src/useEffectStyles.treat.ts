import { styleMap } from 'treat'
import * as O from 'fp-ts/es6/Option'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'

export const opacity = styleMap((theme) =>
  pipe(
    theme.rules.opacity,
    O.fromNullable,
    O.map(mapToProperty('opacity')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const opacityTablet = styleMap((theme) =>
  pipe(
    theme.rules.opacity,
    O.fromNullable,
    O.map(mapToProperty('opacity')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const opacityDesktop = styleMap((theme) =>
  pipe(
    theme.rules.opacity,
    O.fromNullable,
    O.map(mapToProperty('opacity')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const opacityDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.opacity,
    O.fromNullable,
    O.map(mapToProperty('opacity')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
