import { StandardProperties } from 'csstype'
import { map } from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { resolveGrid } from './utils'

import { backgroundRules } from './backgroundRules'
import { borderRules } from './borderRules'
import { effectRules } from './effectRules'
import { flexboxRules } from './flexboxRules'
import { gridRules } from './gridRules'
import { interactivityRules } from './interactivityRules'
import { layoutRules } from './layoutRules'
import { sizingRules } from './sizingRules'
import { transitionRules } from './transitionRules'
import { typographyRules } from './typographyRules'

type BreakpointKeys = 'mobile' | 'tablet' | 'desktop' | 'desktopWide'

export interface CreateCalicoThemeInput {
  breakpoints: Record<BreakpointKeys, number>

  grid: number

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

  rules?: {
    [P in keyof StandardProperties]?: Record<
      string | number,
      NonNullable<StandardProperties<string | number>[P]>
    >
  }
}

export const baseCalicoTheme = {
  baseFontSize: 16,
  rules: {
    ...backgroundRules,
    ...borderRules,
    ...effectRules,
    ...flexboxRules,
    ...gridRules,
    ...interactivityRules,
    ...layoutRules,
    ...sizingRules,
    ...transitionRules,
    ...typographyRules,
  },
} as const

export type CalicoTheme = ReturnType<typeof createCalicoTheme>

export const createCalicoTheme = <T extends CreateCalicoThemeInput>(
  theme: T,
) => {
  const mediaQueries = pipe(
    theme.breakpoints,
    map((value) => `screen and (min-width: ${resolveGrid(theme.grid)(value)})`),
  )

  return {
    mediaQueries,
    ...baseCalicoTheme,
    ...theme,
    rules: {
      ...baseCalicoTheme.rules,
      ...theme.rules,
    },
  } as const
}
