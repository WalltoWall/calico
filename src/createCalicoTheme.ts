import * as RA from 'fp-ts/ReadonlyArray'
import { pipe } from 'fp-ts/function'

import { createMq } from './createMq'
import { minWidthMediaQuery } from './utils'
import { MediaQueries, Rules, Pseudos } from './types'

/**
 * A collection of design tokens used to produce a Calico theme.
 */
export interface CalicoTokens<
  TBreakpoints extends readonly string[] = string[],
  TRules extends Rules = Rules,
  TPseudos extends Pseudos<keyof TRules> = Pseudos<keyof TRules>
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
   * Record of CSS properties to a set of pseudo-classes or pseudo-elements to
   * generate.
   */
  pseudos?: TPseudos
}

/**
 * A collection of design tokens made available to Calico components and hooks.
 */
export interface CalicoTheme<
  TBreakpoints extends readonly string[] = string[],
  TRules extends Rules = Rules,
  TPseudos extends Pseudos<keyof TRules> = Pseudos<keyof TRules>
> extends Required<CalicoTokens<TBreakpoints, TRules, TPseudos>> {
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
  TPseudos extends Pseudos<keyof TRules>
>(
  tokens: CalicoTokens<TBreakpoints, TRules, TPseudos>,
): CalicoTheme<TBreakpoints, TRules, TPseudos> => {
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
    pseudos: tokens.pseudos ?? ({} as TPseudos),
  }
}
