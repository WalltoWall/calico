import { Properties } from 'csstype'
import { map } from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { createMq } from './createMq'
import { resolveGrid } from './utils'

import { sizingRules } from './useSizingStyles'
import { layoutRules } from './useLayoutStyles'
import { interactivityRules } from './useInteractivityStyles'
import { typographyRules } from './useTypographyStyles'
import { gridRules } from './useGridStyles'
import { flexboxRules } from './useFlexboxStyles'
import { borderRules } from './useBorderStyles'
import { effectRules } from './useEffectStyles'
import { backgroundRules } from './useBackgroundStyles'

type PickPartial<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> &
  Partial<Pick<T, K>>
type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>

type BreakpointKeys = 'mobile' | 'tablet' | 'desktop' | 'desktopWide'
type RequiredProperties = 'breakpoints' | 'grid'
type ComputedProperties = 'mediaQueries'

export interface CalicoTheme {
  breakpoints: Record<BreakpointKeys, number>
  mediaQueries: Record<BreakpointKeys, number>

  grid: number
  space: Record<string | number, string | number>

  colors: Record<string, string>

  fonts?: Record<string, any>

  zIndices: Record<string, string>

  transitionDurations: Record<string, string>

  rules: Partial<
    Record<keyof Properties, Record<string | number, string | number>>
  >
}

type CustomCalicoTheme = Omit<
  AtLeast<CalicoTheme, RequiredProperties>,
  ComputedProperties
>

export const baseTheme: Omit<
  PickPartial<CalicoTheme, RequiredProperties>,
  ComputedProperties
> = {
  // Spacing
  space: {},

  // Colors
  colors: {},

  // Z-Indicies
  zIndices: {},

  // Transitions
  transitionDurations: {},

  rules: {
    ...sizingRules,
    ...layoutRules,
    ...interactivityRules,
    ...typographyRules,
    ...gridRules,
    ...flexboxRules,
    ...borderRules,
    ...effectRules,
    ...backgroundRules,
  },
}

export const createCalicoTheme = (theme: CustomCalicoTheme) => {
  const mediaQueries = pipe(
    theme.breakpoints,
    map((value) => `screen and (min-width: ${value * theme.grid}rem)`),
  )

  const resolvedTheme = {
    ...baseTheme,
    ...theme,
    mediaQueries,
  }

  const mq = createMq(
    Object.values(theme.breakpoints).map(resolveGrid(theme.grid)),
  )

  return { theme: resolvedTheme, mq }
}
