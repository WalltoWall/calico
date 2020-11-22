import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'

import { createMq } from './createMq'
import { minWidthMediaQuery } from './utils'
import { Rules, Variants } from './types'

/**
 * A set of design tokens used to produce a Calico theme.
 *
 * - `breakpoints`: Media query breakpoints available to `<Box>` and `useBoxStyles`.
 * - `rules`:
 */
export interface CalicoTokens<
  TRules extends Rules = Rules,
  TVariants extends Variants<keyof TRules> = Variants<keyof TRules>
> {
  /**
   * Media query breakpoints defined as minimum widths. These values will map
   * to responsive style arrays given to `<Box>`, `useBoxStyles`, and
   * `usePseudoBoxStyles`.
   */
  breakpoints?: readonly string[]

  /**
   * Record of identifiers to CSS rules.
   */
  rules?: TRules

  /**
   * Record of CSS properties to a set of variants to generate. Variants
   * include pseudo-classes such as `:hover` and `:focus`.
   */
  variants?: TVariants
}

export interface CalicoTheme<
  TRules extends Rules = Rules,
  TVariants extends Variants<keyof TRules> = Variants<keyof TRules>
> extends Required<CalicoTokens<TRules, TVariants>> {
  /**
   * Media queries generated from the breakpoint tokens.
   */
  mediaQueries: string[]

  /**
   * A function that can be used to create responsive CSS rules using arrays.
   */
  mq: ReturnType<typeof createMq>
}

/**
 * Creates a Calico theme from a set of design tokens.
 *
 * @param tokens Your design tokens.
 *
 * @returns The merged theme object.
 */
export const createCalicoTheme = <
  TRules extends Rules,
  TVariants extends Variants<keyof TRules>
>(
  tokens: CalicoTokens<TRules, TVariants>,
): CalicoTheme<TRules, TVariants> => {
  const breakpoints = [...(tokens.breakpoints ?? (['0'] as const))]
  const mediaQueries = pipe(breakpoints, A.map(minWidthMediaQuery))
  const mq = createMq(mediaQueries.slice(1))

  return {
    breakpoints,
    mediaQueries,
    mq,
    rules: tokens.rules ?? ({} as TRules),
    variants: tokens.variants ?? ({} as TVariants),
  }
}
