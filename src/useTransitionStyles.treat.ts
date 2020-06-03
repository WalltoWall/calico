import { styleMap } from 'treat'
import * as O from 'fp-ts/es6/Option'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty } from './utils'

export const transitionDuration = styleMap((theme) =>
  pipe(
    theme.rules.transitionDuration,
    O.fromNullable,
    O.map(mapToProperty('transitionDuration')),
    O.getOrElseW(() => R.empty),
  ),
)

export const transitionTimingFunction = styleMap((theme) =>
  pipe(
    theme.rules.transitionTimingFunction,
    O.fromNullable,
    O.map(mapToProperty('transitionTimingFunction')),
    O.getOrElseW(() => R.empty),
  ),
)
