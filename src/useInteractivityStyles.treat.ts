import { styleMap } from 'treat'
import * as O from 'fp-ts/es6/Option'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'

export const outline = styleMap((theme) =>
  pipe(
    theme.rules.outline,
    O.fromNullable,
    O.map(mapToProperty('outline')),
    O.getOrElseW(() => R.empty),
  ),
)

export const userSelect = styleMap((theme) =>
  pipe(
    theme.rules.userSelect,
    O.fromNullable,
    O.map(mapToProperty('userSelect')),
    O.getOrElseW(() => R.empty),
  ),
)

export const pointerEvents = styleMap((theme) =>
  pipe(
    theme.rules.pointerEvents,
    O.fromNullable,
    O.map(mapToProperty('pointerEvents')),
    O.map(mapToResponsive('mobile', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const pointerEventsTablet = styleMap((theme) =>
  pipe(
    theme.rules.pointerEvents,
    O.fromNullable,
    O.map(mapToProperty('pointerEvents')),
    O.map(mapToResponsive('tablet', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const pointerEventsDesktop = styleMap((theme) =>
  pipe(
    theme.rules.pointerEvents,
    O.fromNullable,
    O.map(mapToProperty('pointerEvents')),
    O.map(mapToResponsive('desktop', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
export const pointerEventsDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.pointerEvents,
    O.fromNullable,
    O.map(mapToProperty('pointerEvents')),
    O.map(mapToResponsive('desktopWide', theme)),
    O.getOrElseW(() => R.empty),
  ),
)
