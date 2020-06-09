import { Style } from 'treat'
import { Theme } from 'treat/theme'
import { Properties } from 'csstype'
import * as O from 'fp-ts/es6/Option'
import * as R from 'fp-ts/es6/Record'
import { Semigroup } from 'fp-ts/es6/Semigroup'
import { eqNumber } from 'fp-ts/es6/Eq'
import { flow } from 'fp-ts/es6/function'
import { fold } from 'fp-ts/es6/boolean'
import { map, singleton } from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

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
) => (value: TValue): Style => singleton(propertyName, value)

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
) => {
  const minWidth = theme.breakpoints[breakpoint]

  return (styles: Style) =>
    pipe(
      eqNumber.equals(minWidth, 0),
      fold<Style>(
        () =>
          pipe(
            singleton(
              `screen and (min-width: ${resolveGrid(theme.grid)(minWidth)})`,
              styles,
            ),
            (mediaStyles) => singleton('@media', mediaStyles),
          ),
        () => styles,
      ),
    )
}

/**
 * Maps values of a Record to a style property.
 *
 * @param propertyName CSS property to which values will be assigned.
 *
 * @returns Treat-compatible style map to pass to `styleMap`.
 */
export const mapToProperty = <TPropertyName extends keyof Properties>(
  propertyName: TPropertyName,
) => map(styleSingleton(propertyName))

/**
 * Maps values of a StyleMap to a specified theme breakpoint.
 *
 * @param breakpoint Breakpoint name to which values will be assigned.
 * @param theme Theme with `breakpoints` and `grid` tokens.
 *
 * @returns Treat-compatible style map to pass to `styleMap`.
 */
export const mapToResponsive = (
  breakpoint: keyof Theme['breakpoints'],
  theme: Theme,
) => map(makeResponsive(breakpoint, theme))

/**
 * Convenience function that maps values of a Record to a style property for a
 * specified theme breakpoint.
 *
 * @param propertyName CSS property to which values will be assigned.
 * @param breakpoint Breakpoint name to which values will be assigned.
 * @param theme Theme with `breakpoints` token.
 */
export const mapToResponsiveProperty = (
  propertyName: keyof Properties,
  breakpoint: keyof Theme['breakpoints'],
  theme: Theme,
) => flow(mapToProperty(propertyName), mapToResponsive(breakpoint, theme))

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
): Readonly<[Keys, Keys, Keys, Keys]> => {
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

export const resolveResponsiveProp = <
  Keys extends string | number = string | number
>(
  value: ResponsiveProp<Keys> | undefined,
  atoms: Record<keyof Theme['breakpoints'], Record<Keys, string>>,
) => {
  console.log({ value, atoms })

  if (value === undefined) return
  if (typeof value === 'string') return atoms.mobile[value]

  const [
    mobileValue,
    tabletValue,
    desktopValue,
    desktopWideValue,
  ] = normalizeResponsiveProp(value)

  return (
    atoms.mobile[mobileValue] +
    (tabletValue !== mobileValue ? ' ' + atoms.tablet[tabletValue] : '') +
    (desktopValue !== tabletValue ? ' ' + atoms.desktop[desktopValue] : '') +
    (desktopWideValue !== desktopValue
      ? ' ' + atoms.desktopWide[desktopWideValue]
      : '')
  )
}

export const semigroupResponsiveStyle: Semigroup<Style> = {
  concat: (x, y) => ({
    ...x,
    ...y,
    '@media': {
      ...y['@media'],
      ...x['@media'],
    },
  }),
}

export function mapFromOptionalTheme<A extends ReadonlyArray<unknown>, B>(
  ab: (...a: A) => B,
): (...a: A) => B
export function mapFromOptionalTheme<A extends ReadonlyArray<unknown>, B, C>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
): (...a: A) => C
export function mapFromOptionalTheme(ab: Function, bc?: Function): unknown {
  switch (arguments.length) {
    case 1: {
      return flow(
        O.fromNullable,
        //@ts-ignore
        O.map(flow(ab)),
        O.getOrElseW(() => R.empty),
      )
    }
    case 2: {
      return flow(
        O.fromNullable,
        //@ts-ignore
        O.map(flow(ab, bc)),
        O.getOrElseW(() => R.empty),
      )
    }
    default: {
      throw new Error()
    }
  }
}

export const responsiveStyle = (theme: Theme) => (
  styleMap: Record<string, Style>,
) => {
  return pipe(
    theme.mediaQueries,
    map((mediaQuery) =>
      pipe(
        styleMap,
        map((style) => R.singleton(mediaQuery, style)),
        map((value) => R.singleton('@media', value)),
      ),
    ),
  )
}

export const variantResponsiveStyle = (theme: Theme) => (variant: string) => (
  styleMap: Record<string, Style>,
) => {
  return pipe(
    theme.mediaQueries,
    map((mediaQuery) =>
      pipe(
        styleMap,
        map((style) => R.singleton(variant, style)),
        map((variantStyle) => R.singleton(mediaQuery, variantStyle)),
        map((value) => R.singleton('@media', value)),
      ),
    ),
  )
}
