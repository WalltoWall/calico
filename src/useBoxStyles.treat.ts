import { styleTree, styleMap } from 'treat'
import { Theme } from 'treat/theme'
import { SimplePseudos, StandardProperties } from 'csstype'
import * as R from 'fp-ts/Record'
import { pipe } from 'fp-ts/pipeable'

import { Atoms, Mutable, RecordValue, UnwrappedArray } from './types'
import { styleSingleton, mapToBreakpoints, mapToPseudo } from './utils'

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
    theme.pseudos as Required<typeof theme.pseudos>,
    R.reduceWithIndex(
      {} as Record<
        SimplePseudos,
        Partial<Record<keyof StandardProperties, true>>
      >,
      (propertyName, acc, config) => {
        for (const pseudo of config)
          acc[pseudo] = { ...(acc[pseudo] ?? {}), [propertyName]: true }
        return acc
      },
    ),
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
