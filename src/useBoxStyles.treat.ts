import { styleTree, styleMap } from 'treat'
import { Theme } from 'treat/theme'
import * as R from 'fp-ts/Record'
import { pipe } from 'fp-ts/pipeable'

import { Atoms, Mutable, RecordValue, UnwrappedArray } from './types'
import { styleSingleton, mapToBreakpoints, mapToPseudo } from './utils'
import { SimplePseudos } from 'csstype'
import { INVERTED_PSEUDOS } from './createCalicoTheme'

type ThemeStyleTree = {
  [P in keyof Theme['rules']]: Record<
    keyof Theme['breakpoints'],
    Record<keyof Theme['rules'][P], string>
  >
}

export const styles = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.mapWithIndex((propertyName, atoms) =>
      pipe(
        atoms as Atoms<typeof propertyName>,
        R.map(styleSingleton(propertyName)),
        mapToBreakpoints(theme),
        R.map((atoms) => styleMap(atoms, propertyName)),
      ),
    ),
  ),
) as ThemeStyleTree

type ThemePseudosStyleTree = {
  [P in SimplePseudos as P extends UnwrappedArray<
    Mutable<RecordValue<Theme['pseudos']>>
  >
    ? P
    : never]: {
    [Q in keyof Theme['pseudos'] as P extends UnwrappedArray<
      Mutable<Theme['pseudos'][Q]>
    >
      ? Q
      : never]: {
      [T in keyof Theme['breakpoints']]: Record<keyof Theme['rules'][Q], string>
    }
  }
}

export const pseudos = styleTree((theme) =>
  pipe(
    theme[INVERTED_PSEUDOS] as Required<typeof theme[typeof INVERTED_PSEUDOS]>,
    R.mapWithIndex((pseudo, propertyNames) =>
      pipe(
        propertyNames as Required<typeof propertyNames>,
        R.mapWithIndex(
          (propertyName) =>
            theme.rules[propertyName as keyof typeof theme.rules],
        ),
        R.mapWithIndex((propertyName, atoms) =>
          pipe(
            atoms as Atoms<typeof propertyName>,
            R.map(styleSingleton(propertyName)),
            R.map(mapToPseudo(pseudo)),
            mapToBreakpoints(theme),
            R.map((atoms) => styleMap(atoms, propertyName)),
          ),
        ),
      ),
    ),
  ),
) as ThemePseudosStyleTree
