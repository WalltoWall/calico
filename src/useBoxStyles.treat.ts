import { styleTree, styleMap } from 'treat'
import { Theme } from 'treat/theme'
import * as R from 'fp-ts/Record'
import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/pipeable'

import { Atoms } from './types'
import { styleSingleton, mapToBreakpoints, mapToPseudo } from './utils'

type UnwrapedArray<T> = T extends readonly (infer U)[] ? U : T
type RecordValue<T> = T extends Record<any, infer U> ? U : T

type ThemeStyleTree = {
  [P in keyof Theme['rules']]: Record<keyof Theme['rules'][P], string>[]
}

type ThemePseudosStyleTree = {
  [P in UnwrapedArray<RecordValue<Required<Theme['pseudos']>>>]: {
    [Q in keyof Theme['pseudos'] as P extends UnwrapedArray<Theme['pseudos'][Q]>
      ? Q
      : never]: Record<keyof Theme['rules'][Q], string>[]
  }
}

export const styles = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.mapWithIndex((propertyName, atoms) =>
      pipe(
        atoms as Atoms<typeof propertyName>,
        R.map(styleSingleton(propertyName)),
        mapToBreakpoints(theme),
        A.map((atoms) => styleMap(atoms, propertyName)),
      ),
    ),
  ),
) as ThemeStyleTree

export const pseudos = styleTree((theme) =>
  pipe(
    theme.pseudos as Required<typeof theme.pseudos>,
    R.reduceWithIndex(
      {} as {
        [P in UnwrapedArray<RecordValue<Required<typeof theme.pseudos>>>]: {
          [Q in keyof typeof theme.pseudos as P extends UnwrapedArray<
            typeof theme.pseudos[Q]
          >
            ? Q
            : never]: typeof theme.rules[Q]
        }
      },
      (propertyName, acc, config) => {
        for (const pseudo of config) {
          // @ts-ignore
          acc[pseudo] = {
            ...acc[pseudo],
            [propertyName]: pipe(theme.rules[propertyName]),
          }
        }
        return acc
      },
    ),
    R.mapWithIndex((pseudo, rules) =>
      pipe(
        rules as {
          [P in keyof Required<typeof theme.pseudos>]: typeof theme.rules[P]
        },
        R.mapWithIndex((propertyName, atoms) =>
          pipe(
            atoms as Atoms<typeof propertyName>,
            R.map(styleSingleton(propertyName)),
            R.map(mapToPseudo(pseudo)),
            mapToBreakpoints(theme),
            A.map((atoms) => styleMap(atoms, propertyName)),
          ),
        ),
      ),
    ),
  ),
) as ThemePseudosStyleTree
