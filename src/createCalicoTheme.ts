import { StandardProperties } from 'csstype'
import * as R from 'fp-ts/Record'
import * as A from 'fp-ts/Array'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/pipeable'

import { createMq } from './createMq'

// TODO: Do not hardcode this.
type BreakpointKeys = 'mobile' | 'tablet' | 'desktop' | 'desktopWide'

/**
 * Record of identifiers to CSS rules.
 */
type Rules<K extends keyof StandardProperties> = Partial<
  {
    [P in K]: Record<
      string | number,
      NonNullable<StandardProperties<string | number>[P]>
    >
  }
>

/**
 * Record of CSS properties to a set of variants to generate. Variants include
 * pseudo-classes such as `:hover` and `:focus`.
 */
type Variants<K extends keyof StandardProperties> = Partial<
  Record<K, Partial<Record<'hover' | 'focus', true>>>
>

export interface CreateCalicoThemeInput<
  TBreakpointKeys extends BreakpointKeys,
  TRulesKeys extends keyof StandardProperties,
  TRules extends Rules<TRulesKeys>,
  TVariantKeys extends TRulesKeys,
  TVariants extends Variants<TVariantKeys>
> {
  breakpoints: Record<TBreakpointKeys, string>
  rules?: TRules
  variants?: TVariants
  // TODO: Is there any need to allow users to provide these values?
  // mediaQueries?: Record<TBreakpointKeys, string>
  // mq?: (mqStyles: MqStyles) => Style
}

export type CalicoTheme = ReturnType<typeof createCalicoTheme>

/**
 * Creates a `treat` compatible theme object that merges with the default calico rules.
 *
 * @param theme Your theme object.
 * @returns The merged theme object.
 */
export const createCalicoTheme = <
  TBreakpointKeys extends BreakpointKeys,
  TRulesKeys extends keyof StandardProperties,
  TRules extends Rules<TRulesKeys>,
  TVariantKeys extends TRulesKeys,
  TVariants extends Variants<TVariantKeys>
>(
  theme: CreateCalicoThemeInput<
    TBreakpointKeys,
    TRulesKeys,
    TRules,
    TVariantKeys,
    TVariants
  >,
) => {
  const mediaQueries = pipe(
    theme.breakpoints,
    R.map((value) => `screen and (min-width: ${value})`),
  )
  const mq = pipe(
    theme.breakpoints,
    R.collect((_, val) => val),
    A.tail,
    O.getOrElse(() => [] as string[]),
    createMq,
  )

  return {
    breakpoints: theme.breakpoints,
    mediaQueries,
    mq,
    rules: theme.rules ?? ({} as TRules),
    variants: theme.variants ?? ({} as TVariants),
  }
}
