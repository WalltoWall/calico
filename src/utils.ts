import { Style } from 'treat'
import { Theme } from 'treat/theme'
import { Properties, SimplePseudos } from 'csstype'
import clsx from 'clsx'
import * as R from 'fp-ts/Record'
import * as B from 'fp-ts/boolean'
import { pipe } from 'fp-ts/function'
import { eqNumber } from 'fp-ts/Eq'

import { ResponsiveProp } from './types'

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
 * @param breakpointIndex Breakpoint name to which styles will be assigned.
 * @param theme Theme with `breakpoints` tokens.
 *
 * @returns Style assigned to the breakpoint.
 */
export const makeResponsive = (
  breakpointName: keyof Theme['breakpoints'],
  theme: Theme,
) => (style: Style) => {
  const minWidthMagnitude = breakpointMagnitude(
    theme.breakpoints[breakpointName],
  )
  const mediaQuery = theme.mediaQueries[breakpointName]

  return pipe(
    eqNumber.equals(minWidthMagnitude, 0),
    B.fold(
      () => R.singleton('@media', R.singleton(mediaQuery, style)) as Style,
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
 * Resolves a responsive prop value to a list of class names using a set of
 * atoms.
 *
 * @param value Responsive prop value.
 * @param responsiveAtoms Set of responsive atoms for appropriate for the prop.
 *
 * @returns A stringified list of class names.
 */
export const resolveResponsiveProp = <K extends string | number>(
  value?: ResponsiveProp<K>,
  responsiveAtoms?: Record<keyof Theme['breakpoints'], Record<K, string>>,
) => {
  if (value === undefined || responsiveAtoms === undefined) return

  const breakpointKeys = Object.keys(
    responsiveAtoms,
  ) as (keyof typeof responsiveAtoms)[]

  if (typeof value === 'string' || typeof value === 'number')
    return responsiveAtoms[breakpointKeys[0]][value]

  if (Array.isArray(value)) {
    const classes = []

    for (let i = 0; i < value.length; i++) {
      const valueForBreakpoint = value[i]
      const atomsForBreakpoint = responsiveAtoms[breakpointKeys[i]]
      if (valueForBreakpoint !== null && atomsForBreakpoint)
        classes[i] = atomsForBreakpoint[valueForBreakpoint]
    }

    return clsx(classes)
  }

  throw new Error('This should be an unreachable error. Please report this.')
}

/**
 * Maps a set of atoms to all of a theme's breakpoints.
 *
 * @param theme Theme with `breakpoints` tokens.
 *
 * @returns The theme's breakpoints mapped to the set of atoms.
 */
export const mapToBreakpoints = (theme: Theme) => <K extends string>(
  atoms: Record<K, Style>,
) =>
  pipe(
    theme.breakpoints,
    R.mapWithIndex((breakpointName) =>
      pipe(atoms, R.map(makeResponsive(breakpointName, theme))),
    ),
  )

/**
 * Returns the magnitude of a breakpoint by extracting the breakpoint's
 * numerical value.
 *
 * @param breakpoint Breakpoint value as a string (e.g. `48rem`).
 *
 * @returns Magnitude of the breakpoint.
 */
export const breakpointMagnitude = (breakpoint: string): number =>
  Number.parseFloat(breakpoint)
