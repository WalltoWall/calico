import { styleMap } from 'treat'
import * as O from 'fp-ts/es6/Option'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'

export const display = styleMap((theme) =>
  pipe(
    theme.rules.display,
    O.fromNullable,
    O.map(mapToProperty('display')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const displayTablet = styleMap((theme) =>
  pipe(
    theme.rules.display,
    O.fromNullable,
    O.map(mapToProperty('display')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const displayDesktop = styleMap((theme) =>
  pipe(
    theme.rules.display,
    O.fromNullable,
    O.map(mapToProperty('display')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const displayDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.display,
    O.fromNullable,
    O.map(mapToProperty('display')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const overflow = styleMap((theme) =>
  pipe(
    theme.rules.overflow,
    O.fromNullable,
    O.map(mapToProperty('overflow')),
    O.getOrElseW(() => R.empty),
  ),
)
export const overflowX = styleMap((theme) =>
  pipe(
    theme.rules.overflow,
    O.fromNullable,
    O.map(mapToProperty('overflowX')),
    O.getOrElseW(() => R.empty),
  ),
)
export const overflowY = styleMap((theme) =>
  pipe(
    theme.rules.overflow,
    O.fromNullable,
    O.map(mapToProperty('overflowY')),
    O.getOrElseW(() => R.empty),
  ),
)

export const position = styleMap((theme) =>
  pipe(
    theme.rules.position,
    O.fromNullable,
    O.map(mapToProperty('position')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const positionTablet = styleMap((theme) =>
  pipe(
    theme.rules.position,
    O.fromNullable,
    O.map(mapToProperty('position')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const positionDesktop = styleMap((theme) =>
  pipe(
    theme.rules.position,
    O.fromNullable,
    O.map(mapToProperty('position')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const positionDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.position,
    O.fromNullable,
    O.map(mapToProperty('position')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const top = styleMap((theme) =>
  pipe(
    theme.rules.top,
    O.fromNullable,
    O.map(mapToProperty('top')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const topTablet = styleMap((theme) =>
  pipe(
    theme.rules.top,
    O.fromNullable,
    O.map(mapToProperty('top')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const topDesktop = styleMap((theme) =>
  pipe(
    theme.rules.top,
    O.fromNullable,
    O.map(mapToProperty('top')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const topDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.top,
    O.fromNullable,
    O.map(mapToProperty('top')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const right = styleMap((theme) =>
  pipe(
    theme.rules.right,
    O.fromNullable,
    O.map(mapToProperty('right')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const rightTablet = styleMap((theme) =>
  pipe(
    theme.rules.right,
    O.fromNullable,
    O.map(mapToProperty('right')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const rightDesktop = styleMap((theme) =>
  pipe(
    theme.rules.right,
    O.fromNullable,
    O.map(mapToProperty('right')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const rightDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.right,
    O.fromNullable,
    O.map(mapToProperty('right')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const bottom = styleMap((theme) =>
  pipe(
    theme.rules.bottom,
    O.fromNullable,
    O.map(mapToProperty('bottom')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const bottomTablet = styleMap((theme) =>
  pipe(
    theme.rules.bottom,
    O.fromNullable,
    O.map(mapToProperty('bottom')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const bottomDesktop = styleMap((theme) =>
  pipe(
    theme.rules.bottom,
    O.fromNullable,
    O.map(mapToProperty('bottom')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const bottomDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.bottom,
    O.fromNullable,
    O.map(mapToProperty('bottom')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const left = styleMap((theme) =>
  pipe(
    theme.rules.left,
    O.fromNullable,
    O.map(mapToProperty('left')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const leftTablet = styleMap((theme) =>
  pipe(
    theme.rules.left,
    O.fromNullable,
    O.map(mapToProperty('left')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const leftDesktop = styleMap((theme) =>
  pipe(
    theme.rules.left,
    O.fromNullable,
    O.map(mapToProperty('left')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const leftDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.left,
    O.fromNullable,
    O.map(mapToProperty('left')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)

export const zIndex = styleMap((theme) =>
  pipe(
    theme.rules.zIndex,
    O.fromNullable,
    O.map(mapToProperty('zIndex')),
    O.getOrElseW(() => R.empty),
  ),
)
