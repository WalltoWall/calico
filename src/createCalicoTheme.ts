import { Style } from 'treat'
import { StandardProperties } from 'csstype'
import { map } from 'fp-ts/Record'
import { pipe } from 'fp-ts/pipeable'

import { rules } from './rules'
import { variants } from './variants'
import { createMq, MqStyles } from './createMq'

type CSSProperties = keyof StandardProperties<string | number>

type Rules = {
  [P in CSSProperties]?: Record<
    string | number,
    NonNullable<StandardProperties<string | number>[P]>
  >
}
type Variants = {
  [P in CSSProperties]?: Partial<Record<'hover' | 'focus', true>>
}
type Aliases<T extends string | number | symbol> = Record<T, CSSProperties[]>

export interface CreateCalicoThemeInput<T extends string | number | symbol> {
  breakpoints: Record<'mobile' | 'tablet' | 'desktop' | 'desktopWide', string>
  mq?: (mqStyles: MqStyles) => Style
  rules?: Rules
  variants?: Variants
  aliases?: Aliases<T>
}

export const baseCalicoTheme = {
  rules,
  variants,
  aliases: {},
} as const

export type CalicoTheme = ReturnType<typeof createCalicoTheme>

/**
 * Creates a `treat` compatible theme object that merges with the default calico rules.
 *
 * @param theme Your theme object.
 * @returns The merged theme object.
 */
export const createCalicoTheme = <
  T extends CreateCalicoThemeInput<keyof T['aliases']>
>(
  theme: T,
) => {
  const mediaQueries = pipe(
    theme.breakpoints,
    map((value) => `screen and (min-width: ${value})`),
  )

  const x = {
    mediaQueries,
    mq: createMq(Object.values(theme.breakpoints).slice(1)),
    ...baseCalicoTheme,
    ...theme,

    rules: {
      ...baseCalicoTheme.rules,
      ...theme.rules,
    },

    variants: {
      ...baseCalicoTheme.variants,
      ...theme.variants,
    },

    aliases: theme.aliases,
  } as const

  return x
}
