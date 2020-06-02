import { styleMap } from 'treat'
import * as O from 'fp-ts/es6/Option'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty } from './utils'

export const borderColor = styleMap((theme) =>
  pipe(
    theme.colors,
    O.fromNullable,
    O.map(mapToProperty('borderColor')),
    O.getOrElseW(() => R.empty),
  ),
)

export const borderWidth = styleMap((theme) =>
  pipe(
    theme.rules.borderWidth,
    O.fromNullable,
    O.map(mapToProperty('borderWidth')),
    O.getOrElseW(() => R.empty),
  ),
)
export const borderTopWidth = styleMap((theme) =>
  pipe(
    theme.rules.borderWidth,
    O.fromNullable,
    O.map(mapToProperty('borderTopWidth')),
    O.getOrElseW(() => R.empty),
  ),
)
export const borderBottomWidth = styleMap((theme) =>
  pipe(
    theme.rules.borderWidth,
    O.fromNullable,
    O.map(mapToProperty('borderBottomWidth')),
    O.getOrElseW(() => R.empty),
  ),
)
export const borderLeftWidth = styleMap((theme) =>
  pipe(
    theme.rules.borderWidth,
    O.fromNullable,
    O.map(mapToProperty('borderLeftWidth')),
    O.getOrElseW(() => R.empty),
  ),
)
export const borderRightWidth = styleMap((theme) =>
  pipe(
    theme.rules.borderWidth,
    O.fromNullable,
    O.map(mapToProperty('borderRightWidth')),
    O.getOrElseW(() => R.empty),
  ),
)

export const borderStyle = styleMap((theme) =>
  pipe(
    theme.rules.borderStyle,
    O.fromNullable,
    O.map(mapToProperty('borderStyle')),
    O.getOrElseW(() => R.empty),
  ),
)

export const borderRadius = styleMap((theme) =>
  pipe(
    theme.rules.borderRadius,
    O.fromNullable,
    O.map(mapToProperty('borderRadius')),
    O.getOrElseW(() => R.empty),
  ),
)
