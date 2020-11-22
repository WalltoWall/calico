import * as RA from 'fp-ts/ReadonlyArray'
import { pipe } from 'fp-ts/function'

import { createMq } from './createMq'
import { minWidthMediaQuery } from './utils'
import { MediaQueries, Rules, Variants } from './types'

/**
 * A set of design tokens used to produce a Calico theme.
 *
 * - `breakpoints`: Media query breakpoints available to `<Box>` and `useBoxStyles`.
 * - `rules`:
 */
export interface CalicoTokens<
  TBreakpoints extends readonly string[] = string[],
  TRules extends Rules = Rules,
  TVariants extends Variants<keyof TRules> = Variants<keyof TRules>
> {
  /**
   * Media query breakpoints defined as minimum widths. These values will map
   * to responsive style arrays given to `<Box>`, `useBoxStyles`, and
   * `usePseudoBoxStyles`.
   */
  breakpoints?: TBreakpoints

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
  TBreakpoints extends readonly string[] = string[],
  TRules extends Rules = Rules,
  TVariants extends Variants<keyof TRules> = Variants<keyof TRules>
> extends Required<CalicoTokens<TBreakpoints, TRules, TVariants>> {
  /**
   * Media queries generated from the breakpoint tokens.
   */
  mediaQueries: MediaQueries<TBreakpoints>

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
  TBreakpoints extends readonly string[],
  TRules extends Rules,
  TVariants extends Variants<keyof TRules>
>(
  tokens: CalicoTokens<TBreakpoints, TRules, TVariants>,
): CalicoTheme<TBreakpoints, TRules, TVariants> => {
  const breakpoints = (tokens.breakpoints ?? ['0']) as TBreakpoints
  const mediaQueries = pipe(
    breakpoints,
    RA.map(minWidthMediaQuery),
  ) as MediaQueries<TBreakpoints>
  const mq = createMq(mediaQueries.slice(1))

  return {
    breakpoints,
    mediaQueries,
    mq,
    rules: tokens.rules ?? ({} as TRules),
    variants: tokens.variants ?? ({} as TVariants),
  }
}
