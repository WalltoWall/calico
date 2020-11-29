import { StandardProperties } from 'csstype'
import * as R from 'fp-ts/Record'
import * as A from 'fp-ts/Array'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

import { MediaQueries, Rules, Pseudos, Breakpoints } from './types'
import { createMq } from './createMq'
import { minWidthMediaQuery } from './utils'

/**
 * A collection of design tokens used to produce a Calico theme.
 */
export interface CalicoTokens<
  TBreakpointKeys extends string = string,
  TRulesKeys extends keyof StandardProperties = never,
  TRules extends Rules<TRulesKeys> = Rules<TRulesKeys>,
  TPseudos extends Pseudos<TRulesKeys> = Pseudos<TRulesKeys>
> {
  /**
   * Media query breakpoints defined as minimum widths. These values will map
   * to responsive style arrays given to `<Box>`, `useBoxStyles`, and
   * `usePseudoBoxStyles`.
   */
  breakpoints?: Breakpoints<TBreakpointKeys>

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
  TBreakpointKeys extends string = string,
  TRulesKeys extends keyof StandardProperties = keyof StandardProperties,
  TRules extends Rules<TRulesKeys> = Rules<TRulesKeys>,
  TPseudos extends Pseudos<TRulesKeys> = Pseudos<TRulesKeys>
> extends Required<
    CalicoTokens<TBreakpointKeys, TRulesKeys, TRules, TPseudos>
  > {
  /**
   * Media queries generated from the breakpoint tokens.
   */
  mediaQueries: MediaQueries<TBreakpointKeys>

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
  TBreakpointKeys extends string,
  TRulesKeys extends keyof StandardProperties,
  TRules extends Rules<TRulesKeys>,
  TPseudos extends Pseudos<TRulesKeys>
>(
  tokens: CalicoTokens<TBreakpointKeys, TRulesKeys, TRules, TPseudos>,
): CalicoTheme<TBreakpointKeys, TRulesKeys, TRules, TPseudos> => {
  const breakpoints = tokens.breakpoints ?? ({} as Breakpoints<TBreakpointKeys>)
  const mediaQueries = pipe(breakpoints, R.map(minWidthMediaQuery))
  const mq = pipe(
    breakpoints,
    R.collect((_, val) => val),
    A.tail,
    O.getOrElse(() => [] as string[]),
    createMq,
  )

  return {
    breakpoints,
    mediaQueries,
    mq,
    rules: tokens.rules ?? ({} as TRules),
    pseudos: tokens.pseudos ?? ({} as TPseudos),
  }
}
