import { styleTree, styleMap } from 'treat'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { styleSingleton, mapToBreakpoints, mapToPseudo } from './utils'

export const styles = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.mapWithIndex((propertyName, atoms) =>
      pipe(
        atoms as Record<string | number, string | number>,
        R.map(styleSingleton(propertyName)),
        mapToBreakpoints(theme),
        R.map(styleMap),
      ),
    ),
  ),
)

export const hover = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.filterWithIndex((ruleName) => Boolean(theme.variants[ruleName]?.hover)),
    R.mapWithIndex((propertyName: keyof typeof theme.variants, atoms) =>
      pipe(
        atoms as Record<string | number, string | number>,
        R.map(styleSingleton(propertyName)),
        R.map(mapToPseudo(':hover')),
        mapToBreakpoints(theme),
        R.map(styleMap),
      ),
    ),
  ),
)

export const focus = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.filterWithIndex((ruleName) => Boolean(theme.variants[ruleName]?.focus)),
    R.mapWithIndex((propertyName: keyof typeof theme.variants, atoms) =>
      pipe(
        atoms as Record<string | number, string | number>,
        R.map(styleSingleton(propertyName)),
        R.map(mapToPseudo(':focus')),
        mapToBreakpoints(theme),
        R.map(styleMap),
      ),
    ),
  ),
)
