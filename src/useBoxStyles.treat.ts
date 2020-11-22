import { styleTree, styleMap } from 'treat'
import { Theme } from 'treat/theme'
import { SimplePseudos } from 'csstype'
import * as R from 'fp-ts/Record'
import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/pipeable'

import { styleSingleton, mapToBreakpoints, mapToPseudo } from './utils'

type ThemeStyleTree = {
  [P in keyof Theme['rules']]: Record<keyof Theme['rules'][P], string>[]
}

type ThemeVariantStyleTree<TPsuedoType extends SimplePseudos> = {
  [P in keyof Theme['pseudos'] as TPsuedoType extends keyof Theme['pseudos'][P]
    ? P
    : never]: Record<keyof Theme['rules'][P], string>[]
}

// TODO: Move all psuedo styles into one giant `styles` styleTree. Each rule can be shaped like:
// { _: {base}, ':hover': {hover}, ':focus': {focus}, ... }
// This means all pseudos can be generated without having special keys

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
        theme.pseudos[propertyName as keyof typeof theme.pseudos]?.[':hover'],
      ),
    ),
    R.mapWithIndex((propertyName: keyof typeof theme.pseudos, atoms) =>
      pipe(
        atoms as Record<string | number, string | number>,
        R.map(styleSingleton(propertyName)),
        R.map(mapToPseudo(':hover')),
        mapToBreakpoints(theme),
        A.map((atoms) => styleMap(atoms, propertyName)),
      ),
    ),
  ),
) as ThemeVariantStyleTree<':hover'>

export const focus = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.filterWithIndex((propertyName) =>
      Boolean(
        theme.pseudos[propertyName as keyof typeof theme.pseudos]?.[':focus'],
      ),
    ),
    R.mapWithIndex((propertyName: keyof typeof theme.pseudos, atoms) =>
      pipe(
        atoms as Record<string | number, string | number>,
        R.map(styleSingleton(propertyName)),
        R.map(mapToPseudo(':focus')),
        mapToBreakpoints(theme),
        A.map((atoms) => styleMap(atoms, propertyName)),
      ),
    ),
  ),
) as ThemeVariantStyleTree<':focus'>
