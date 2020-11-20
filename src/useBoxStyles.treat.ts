import { styleTree, styleMap } from 'treat'
import * as R from 'fp-ts/Record'
import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/pipeable'

import { styleSingleton, mapToBreakpoints, mapToPseudo } from './utils'

export const styles = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.mapWithIndex((propertyName, atoms) =>
      pipe(
        atoms as Record<string | number, string | number>,
        R.map(styleSingleton(propertyName)),
        mapToBreakpoints(theme),
        A.map((atoms) => styleMap(atoms, propertyName)),
      ),
    ),
  ),
)

export const hover = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.filterWithIndex((propertyName) =>
      // @ts-expect-error `theme.variants` is typed as `{}`, which can never contain `ruleName`
      Boolean(theme.variants[propertyName]?.hover),
    ),
    R.mapWithIndex((propertyName: keyof typeof theme.variants, atoms) =>
      pipe(
        atoms as Record<string | number, string | number>,
        R.map(styleSingleton(propertyName)),
        R.map(mapToPseudo(':hover')),
        mapToBreakpoints(theme),
        A.map((atoms) => styleMap(atoms, propertyName)),
      ),
    ),
  ),
)

export const focus = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.filterWithIndex((propertyName) =>
      // @ts-expect-error `theme.variants` is typed as `{}`, which can never contain `propertyName`
      Boolean(theme.variants[propertyName]?.focus),
    ),
    R.mapWithIndex((propertyName: keyof typeof theme.variants, atoms) =>
      pipe(
        atoms as Record<string | number, string | number>,
        R.map(styleSingleton(propertyName)),
        R.map(mapToPseudo(':focus')),
        mapToBreakpoints(theme),
        A.map((atoms) => styleMap(atoms, propertyName)),
      ),
    ),
  ),
)
