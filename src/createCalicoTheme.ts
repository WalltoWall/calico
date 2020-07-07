import { Style } from 'treat'
import { StandardProperties } from 'csstype'
import { map } from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { rules } from './rules'
import { variants } from './variants'
import { createMq, MqStyles } from './createMq'

type BreakpointKeys = 'mobile' | 'tablet' | 'desktop' | 'desktopWide'

export interface CreateCalicoThemeInput {
  breakpoints: Record<BreakpointKeys, string>

  baseFontSize?: number
  fonts?: Record<
    string,
    {
      stack: string
      baseFontHeight: number
      descenderHeightScale: number
      capHeightScale: number
    }
  >

  mq?: (mqStyles: MqStyles) => Style

  rules?: {
    [P in keyof StandardProperties]?: Record<
      string | number,
      NonNullable<StandardProperties<string | number>[P]>
    >
  }
  variants?: {
    [P in keyof StandardProperties]?: Partial<Record<'hover' | 'focus', true>>
  }
}

export const baseCalicoTheme = {
  baseFontSize: 16,
  rules,
  variants,
} as const

export type CalicoTheme = ReturnType<typeof createCalicoTheme>

/**
 * Creates a `treat` compatible theme object that merges with the default calico rules.
 *
 * @param theme Your theme object.
 * @returns The merged theme object.
 */
export const createCalicoTheme = <T extends CreateCalicoThemeInput>(
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
  } as const

  return x
}
