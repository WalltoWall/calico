import { Style } from 'treat'
import { Properties } from 'csstype'
import * as E from 'fp-ts/es6/Either'
import { Semigroup } from 'fp-ts/es6/Semigroup'
import { eqNumber } from 'fp-ts/es6/Eq'
import { flow, identity } from 'fp-ts/es6/function'
import { fold } from 'fp-ts/es6/boolean'
import { map, singleton } from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { ResponsiveProp } from './types'
import { Theme } from './theme'
import { BoxProps } from './Box'

export type NegatableSpace = NonNullable<Exclude<BoxProps['padding'], 'auto'>>
/**
 * Converts a given space value to it's negative equivalent.
 *
 * @param space The space value to negate.
 * @returns The negative equivalent space value.
 */
export const negateSpace = (space: NegatableSpace) =>
  Array.isArray(space)
    ? (space.map((val) => -1 * val) as typeof space)
    : ((-1 * (space as number)) as typeof space)

/**
 * Converts a grid measurement based in `rem` to an actual `rem`.
 *
 * @param grid Grid size relative to `1rem`.
 * @param amount Amount of grid units for the measurement.
 *
 * @returns `rem` value.
 */
export const resolveGrid = (grid: number) => (amount: number) => {
  return `${grid * amount}rem`
}

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
 * A version of `styleSingleton` for space properties that automatically
 * converts space values to rems using the theme's grid size.
 *
 * @param propertyName CSS property to which `value` will be assigned.
 * @param theme Theme with `grid` token.
 *
 * @returns Treat-compatible Style to pass to `style`.
 */
export const styleSpaceSingleton = <TPropertyName extends keyof Properties>(
  propertyName: TPropertyName,
  theme: Theme,
) => (value: string | number) =>
  pipe(
    typeof value === 'number' ? E.right(value) : E.left(value),
    E.fold(identity, resolveGrid(theme.grid)),
    styleSingleton(propertyName),
  )

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
 * A version of `mapToProperty` for space properties that automatically
 * converts space values to rems using the theme's grid size.
 *
 * @see `mapToProperty`
 *
 * @param propertyName CSS property to which values will be assigned.
 * @param theme Theme with `grid` token.
 *
 * @returns Treat-compatible style map to pass to `styleMap`.
 */
export const mapToSpaceProperty = <TPropertyName extends keyof Properties>(
  propertyName: TPropertyName,
  theme: Theme,
) => map(styleSpaceSingleton(propertyName, theme))

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
 * Convenience function that maps a theme's space tokens to a style property
 * for a specified theme breakpoint.
 *
 * @param propertyName CSS property to which tokens will be assigned.
 * @param breakpoint Breakpoint name to which tokens will be assigned.
 * @param theme Theme with `breakpoints` and `grid` tokens.
 */
export const mapToResponsiveSpaceProperty = (
  propertyName: keyof Properties,
  breakpoint: keyof Theme['breakpoints'],
  theme: Theme,
) =>
  flow(
    mapToSpaceProperty(propertyName, theme),
    mapToResponsive(breakpoint, theme),
  )

/**
 * Convenience function that creates a style map for a property and specified
 * theme breakpoint using the theme's space tokens.
 *
 * @param propertyName CSS property to which tokens will be assigned.
 * @param breakpoint Breakpoint name to which tokens will be assigned.
 * @param theme Theme with `breakpoints` and `grid` tokens.
 */
export const responsiveSpaceMap = (
  propertyName: keyof Properties,
  breakpoint: keyof Theme['breakpoints'],
  theme: Theme,
): Record<string | number, Style> =>
  pipe(
    theme.space,
    mapToResponsiveSpaceProperty(propertyName, breakpoint, theme),
  )

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

/**
 * Resolves a responsive prop value to a class list picked from the provided
 * breakpoint-specific atoms.
 *
 * @param value Responsive prop value.
 * @param mobileAtoms Atoms for the mobile breakpoint.
 * @param tabletAtoms Atoms for the tablet breakpoint.
 * @param desktopAtoms Atoms for the desktop breakpoint.
 * @param desktopWideAtoms Atoms for the desktopWide breakpoint.
 *
 * @returns A stringified set of classes for the provided prop value.
 */
export const resolveResponsiveProp = <Keys extends string | number>(
  value: ResponsiveProp<Keys>,
  mobileAtoms: Record<Keys, string | number>,
  tabletAtoms: Record<Keys, string | number>,
  desktopAtoms: Record<Keys, string | number>,
  desktopWideAtoms: Record<Keys, string | number>,
) => {
  if (typeof value === 'string') return mobileAtoms[value]

  const [
    mobileValue,
    tabletValue,
    desktopValue,
    desktopWideValue,
  ] = normalizeResponsiveProp(value)

  return (
    mobileAtoms[mobileValue] +
    (tabletValue !== mobileValue ? ' ' + tabletAtoms[tabletValue] : '') +
    (desktopValue !== tabletValue ? ' ' + desktopAtoms[desktopValue] : '') +
    (desktopWideValue !== desktopValue
      ? ' ' + desktopWideAtoms[desktopWideValue]
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
