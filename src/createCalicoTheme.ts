import { Properties } from 'csstype'
import { map } from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { resolveGrid } from './utils'

import { backgroundRules } from './useBackgroundStyles'
import { borderRules } from './useBorderStyles'
import { effectRules } from './useEffectStyles'
import { flexboxRules } from './useFlexboxStyles'
import { gridRules } from './useGridStyles'
import { interactivityRules } from './useInteractivityStyles'
import { layoutRules } from './useLayoutStyles'
import { sizingRules } from './useSizingStyles'
import { transitionRules } from './useTransitionStyles'
import { typographyRules } from './useTypographyStyles'

type BreakpointKeys = 'mobile' | 'tablet' | 'desktop' | 'desktopWide'

export interface CreateCalicoThemeInput {
  breakpoints: Record<BreakpointKeys, number>

  grid: number
  space?: Record<string | number, string | number>

  colors?: Record<string, string>

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
    [P in keyof Properties]?: Record<
      string | number,
      NonNullable<Properties[P]>
    >
  }
}

export const baseCalicoTheme = {
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
    map(
      (value) => `screen and (min-width: ${resolveGrid(theme.grid)(value)}rem)`,
    ),
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
