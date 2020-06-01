import { Style } from 'treat'
import { Properties } from 'csstype'
import { map, singleton } from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'
import { fold } from 'fp-ts/es6/boolean'
import { eqNumber } from 'fp-ts/es6/Eq'
import { flow, identity } from 'fp-ts/es6/function'
import * as E from 'fp-ts/es6/Either'

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
