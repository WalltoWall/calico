import { Style } from 'treat'
import clsx from 'clsx'
import { Theme } from 'treat/theme'
import { Properties, SimplePseudos } from 'csstype'
import * as A from 'fp-ts/Array'
import * as R from 'fp-ts/Record'
import * as S from 'fp-ts/Semigroup'
import * as Ord from 'fp-ts/Ord'
import * as Tup from 'fp-ts/Tuple'
import * as B from 'fp-ts/boolean'
import { pipe } from 'fp-ts/function'
import { eqNumber } from 'fp-ts/Eq'

import { Breakpoints, ResponsiveProp } from './types'

/**
 * Creates a Style with a single property.
 *
 * @param propertyName CSS property to which `value` will be assigned.
 *
 * @returns Treat-compatible Style to pass to `style`.
 */
export const styleSingleton = <
  TPropertyName extends keyof Properties,
  TValue extends string | number
>(
  propertyName: TPropertyName,
) => (value: TValue): Style => R.singleton(propertyName, value)

/**
 * Assigns a Style to a particular breakpoint.
 *
 * @param breakpoint Breakpoint name to which styles will be assigned.
 * @param theme Theme with `breakpoints` tokens.
 *
 * @returns Style assigned to the breakpoint.
 */
export const makeResponsive = (
  breakpoint: keyof Theme['breakpoints'],
  theme: Theme,
) => (style: Style) => {
  const minWidth = Number.parseFloat(theme.breakpoints[breakpoint])
  const mediaQuery = theme.mediaQueries[breakpoint]

  return pipe(
    eqNumber.equals(minWidth, 0),
    B.fold<Style>(
      () => R.singleton('@media', R.singleton(mediaQuery, style)),
      () => style,
    ),
  )
}

/**
 * Builds a media query string for the screen media type and a given minimum width.
 *
 * @param minWidth Minimum width for the media query.
 *
 * @returns A media query string for the minimum width.
 */
export const minWidthMediaQuery = (minWidth: string) =>
  `screen and (min-width: ${minWidth})`

/**
 * Assigns a Style to a particular pseudo-class.
 *
 * @param pseudo Pseudo-class to which styles will be assigned.
 *
 * @returns Style assigned to the pseudo-class.
 */
export const mapToPseudo = (pseudo: SimplePseudos) => (style: Style) =>
  R.singleton(pseudo, style)

/**
 * Normalizes a responsive prop value to a tuple with values for all
 * breakpoints. If the prop value contains less values than there are
 * breakpoints, the right-most element is repeated (i.e. it is expanded).
 *
 * @param value Reponsive prop value.
 *
 * @returns A tuple containing prop values for all breakpoints.
 */
export const normalizeResponsiveProp = <Keys extends string | number | boolean>(
  value: ResponsiveProp<Keys>,
): Readonly<[Keys | null, Keys | null, Keys | null, Keys | null]> => {
  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
    return [value, value, value, value]

  if ('length' in value)
    switch (value.length) {
      case 2:
        return [value[0], value[1], value[1], value[1]]

      case 3:
        return [value[0], value[1], value[2], value[2]]

      case 4:
        return value
    }

  throw new Error(`Invalid responsive prop value: ${JSON.stringify(value)}`)
}

/**
 * Resolves a responsive prop value to a list of class names using a set of
 * atoms.
 *
 * @param value Responsive prop value.
 * @param responsiveAtoms Set of responsive atoms for appropriate for the prop.
 *
 * @returns A stringified list of class names.
 */
export const resolveResponsiveProp = <K extends string | number>(
  value: ResponsiveProp<K> | undefined,
  responsiveAtoms: Record<keyof Theme['breakpoints'], Record<K, string>>,
) => {
  if (value === undefined) return
  if (typeof value === 'string' || typeof value === 'number') {
    const smallestBreakpoint = Object.keys(responsiveAtoms)[0]
    return responsiveAtoms[smallestBreakpoint][value]
  }

  const [mobileValue, tabletValue, desktopValue, desktopWideValue] = value as [
    K,
    K,
    K,
    K,
  ]

  // If a responsive value is null, it will return undefined and wont be included.
  return clsx(
    responsiveAtoms.mobile[mobileValue as K],
    responsiveAtoms.tablet[tabletValue as K],
    responsiveAtoms.desktop[desktopValue as K],
    responsiveAtoms.desktopWide[desktopWideValue as K],
  )
}

/**
 * Maps a set of atoms to all of a theme's breakpoints.
 *
 * @param theme Theme with `breakpoints` tokens.
 *
 * @returns The theme's breakpoints mapped to the set of atoms.
 */
export const mapToBreakpoints = (theme: Theme) => (
  atoms: Record<string, Style>,
) =>
  pipe(
    theme.breakpoints,
    R.mapWithIndex((breakpointName) =>
      pipe(atoms, R.map(makeResponsive(breakpointName, theme))),
    ),
  )

const breakpointOrd: Ord.Ord<string> = {
  equals: (x, y) => x === y,
  compare: (x, y) =>
    Ord.ordNumber.compare(Number.parseFloat(x), Number.parseFloat(y)),
}

const byBreakpointTupleSnd = Ord.ord.contramap(
  breakpointOrd,
  ([_fst, snd]: [string, string]) => snd,
)

export const sortBreakpointsAsc = <K extends string>(
  breakpoints: Breakpoints<K>,
): Breakpoints<K> =>
  pipe(breakpoints, R.toArray, A.sortBy([byBreakpointTupleSnd]), (tuples) =>
    R.fromFoldableMap(S.getLastSemigroup<string>(), A.array)(
      tuples,
      ([key, val]) => [key, val],
    ),
  )

export const getSortedBreakpointKeys = <K extends string>(
  breakpoints: Breakpoints<K>,
): K[] =>
  pipe(breakpoints, R.toArray, A.sortBy([byBreakpointTupleSnd]), A.map(Tup.fst))
