import { styleTree, styleMap, Style } from 'treat'
import { Theme } from 'treat/theme'
import { SimplePseudos } from 'csstype'
import * as R from 'fp-ts/Record'
import * as A from 'fp-ts/Array'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/pipeable'

import { PseudosConfig } from './types'
import { styleSingleton, mapToBreakpoints, mapToPseudo } from './utils'

type XXXX = {
  [P in keyof Theme['rules']]: {
    _: Record<keyof Theme['rules'][P], string>[]
  } & {
    [Q in SimplePseudos as P extends keyof Theme['pseudos']
      ? Q extends keyof Theme['pseudos'][P]
        ? Q
        : never
      : never]: Record<keyof Theme['rules'][P], string>[]
  }
}

export const styles = (styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.mapWithIndex((propertyName, atoms) => {
      const pseudos = pipe(
        theme.pseudos,
        R.lookup(propertyName),
        O.getOrElse(() => ({} as PseudosConfig)),
      )

      return pipe(
        pseudos as Required<typeof pseudos>,
        R.map((value) => (value === true ? atoms : undefined)),
        (x) => ({ ...x, _: atoms }),
        R.map((x) => {
          if (x === undefined) return

          const res = {} as Record<string | number, Style>
          for (const k in x) {
            res[k] = styleSingleton(propertyName)(x[k as keyof typeof x])
          }
          return res
        }),
        R.mapWithIndex((psuedo, x) => {
          if (x === undefined) return
          if (psuedo === '_') return x

          return pipe(x, R.map(mapToPseudo(psuedo)))
        }),
        R.map((x) => {
          if (x === undefined) return

          return mapToBreakpoints(theme)(x)
        }),
        R.map((x) => {
          if (x === undefined) return

          return pipe(
            x,
            A.map((atoms) => styleMap(atoms, propertyName)),
          )
        }),
      )
    }),
  ),
) as unknown) as XXXX
