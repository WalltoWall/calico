import { styleTree, styleMap } from 'treat'
import * as R from 'fp-ts/Record'
import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/pipeable'

import { Theme } from 'treat/theme'

import { styleSingleton, mapToBreakpoints, mapToPseudo } from './utils'
import { VariantTypes } from './types'

type ThemeStyleTree = {
  [P in keyof Theme['rules']]: Record<keyof Theme['rules'][P], string>[]
}

type ThemeVariantStyleTree<TVariantType extends VariantTypes> = {
  [P in keyof Theme['variants'] as TVariantType extends keyof Theme['variants'][P]
    ? P
    : never]: Record<keyof Theme['rules'][P], string>[]
}

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
) as ThemeStyleTree

export const hover = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.filterWithIndex((propertyName) =>
      Boolean(
        theme.variants[propertyName as keyof typeof theme.variants]?.hover,
      ),
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
) as ThemeVariantStyleTree<'hover'>

export const focus = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.filterWithIndex((propertyName) =>
      Boolean(
        theme.variants[propertyName as keyof typeof theme.variants]?.focus,
      ),
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
) as ThemeVariantStyleTree<'focus'>
