import { StandardProperties } from 'csstype'
import * as R from 'fp-ts/Record'
import * as A from 'fp-ts/Array'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

import { createMq } from './createMq'
import { minWidthMediaQuery, sortBreakpointsAsc } from './utils'
import { Breakpoints, Rules, Variants } from './types'

export interface CreateCalicoThemeInput<
  TBreakpointKeys extends string = never,
  TBreakpoints extends Breakpoints<TBreakpointKeys> = Breakpoints<
    TBreakpointKeys
  >,
  TRulesKeys extends keyof StandardProperties = never,
  TRules extends Rules<TRulesKeys> = Rules<TRulesKeys>,
  TVariantKeys extends TRulesKeys = never,
  TVariants extends Variants<TVariantKeys> = Variants<TVariantKeys>
> {
  breakpoints?: TBreakpoints
  rules?: TRules
  variants?: TVariants
}

export type CalicoTheme = ReturnType<typeof createCalicoTheme>

/**
 * Creates a treat compatible theme object that merges with the default Calico rules.
 *
 * @param theme Your theme object.
 *
 * @returns The merged theme object.
 */
export const createCalicoTheme = <
  TBreakpointKeys extends string,
  TBreakpoints extends Breakpoints<TBreakpointKeys>,
  TRulesKeys extends keyof StandardProperties,
  TRules extends Rules<TRulesKeys>,
  TVariantKeys extends TRulesKeys,
  TVariants extends Variants<TVariantKeys>
>(
  theme: CreateCalicoThemeInput<
    TBreakpointKeys,
    TBreakpoints,
    TRulesKeys,
    TRules,
    TVariantKeys,
    TVariants
  >,
) => {
  const sortedBreakpoints = pipe(
    theme.breakpoints ?? ({} as TBreakpoints),
    sortBreakpointsAsc,
  )

  const mediaQueries = pipe(sortedBreakpoints, R.map(minWidthMediaQuery))

  const mq = pipe(
    sortedBreakpoints,
    R.collect((_, val) => val),
    A.tail,
    O.getOrElse(() => [] as string[]),
    createMq,
  )

  return {
    breakpoints: sortedBreakpoints,
    mediaQueries,
    mq,
    rules: theme.rules ?? ({} as TRules),
    variants: theme.variants ?? ({} as TVariants),
  }
}
