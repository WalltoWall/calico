import { styleMap } from 'treat'
import * as O from 'fp-ts/es6/Option'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty } from './utils'

export const backgroundSize = styleMap((theme) =>
  pipe(
    theme.rules.backgroundSize,
    O.fromNullable,
    O.map(mapToProperty('backgroundSize')),
    O.getOrElseW(() => R.empty),
  ),
)

export const backgroundPositionX = styleMap((theme) =>
  pipe(
    theme.rules.backgroundPositionX,
    O.fromNullable,
    O.map(mapToProperty('backgroundPositionX')),
    O.getOrElseW(() => R.empty),
  ),
)

export const backgroundPositionY = styleMap((theme) =>
  pipe(
    theme.rules.backgroundPositionY,
    O.fromNullable,
    O.map(mapToProperty('backgroundPositionY')),
    O.getOrElseW(() => R.empty),
  ),
)

export const backgroundRepeat = styleMap((theme) =>
  pipe(
    theme.rules.backgroundRepeat,
    O.fromNullable,
    O.map(mapToProperty('backgroundRepeat')),
    O.getOrElseW(() => R.empty),
  ),
)

export const backgroundColor = styleMap((theme) =>
  pipe(
    theme.colors,
    O.fromNullable,
    O.map(mapToProperty('backgroundColor')),
    O.getOrElseW(() => R.empty),
  ),
)
