import { Properties } from 'csstype'
import { map } from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { createMq } from './createMq'
import { resolveGrid } from './utils'

type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>

// type Theme = typeof baseTheme & {
//   mediaQueries: Record<(typeof baseTheme)['breakpoints'], string>
// }

type BreakpointKeys = 'mobile' | 'tablet' | 'desktop' | 'desktopWide'

export interface Theme {
  breakpoints: Record<BreakpointKeys, number>
  mediaQueries: Record<BreakpointKeys, number>

  grid: number
  space: Record<string | number, string | number>

  colors: Record<string, string>

  fonts: Record<string, any>
  fontWeights: Record<string, number>
  lineHeights: Record<string, string>
  letterSpacings: Record<string, string>
  borderWidths: Record<string, string>
  borderStyles: Record<string, string>
  borderRadii: Record<string, string>

  zIndices: Record<string, string>

  transitionDurations: Record<string, string>

  rules: Partial<
    Record<keyof Properties, Record<string | number, string | number>>
  >
}

type ProvidedTheme = AtLeast<Theme, 'breakpoints' | 'grid'>

export const baseTheme: Theme = {
  // Spacing
  space: {},

  // Colors
  colors: {},

  // Fonts
  fonts: {},
  fontWeights: {},
  lineHeights: {},
  letterSpacings: {},

  // Borders
  borderWidths: {},
  borderStyles: {},
  borderRadii: {},

  // Z-Indicies
  zIndices: {},

  // Transitions
  transitionDurations: {},

  rules: {
    // Layout
    width: {
      full: '100%',
      '1/12': `${(1 / 12) * 100}%`,
      '2/12': `${(2 / 12) * 100}%`,
      '3/12': `${(3 / 12) * 100}%`,
      '4/12': `${(4 / 12) * 100}%`,
      '5/12': `${(5 / 12) * 100}%`,
      '6/12': `${(6 / 12) * 100}%`,
      '7/12': `${(7 / 12) * 100}%`,
      '8/12': `${(8 / 12) * 100}%`,
      '9/12': `${(9 / 12) * 100}%`,
      '10/12': `${(10 / 12) * 100}%`,
      '11/12': `${(11 / 12) * 100}%`,
      '12/12': `${(12 / 12) * 100}%`,
      auto: 'auto',
    },
    height: {
      full: '100%',
      1: '1px',
      auto: 'auto',
    },
    display: {
      block: 'block',
      inline: 'inline',
      none: 'none',
      inlineBlock: 'inline-block',
      flex: 'flex',
      grid: 'grid',
    },
    outline: {
      none: 'none',
    },
    userSelect: {
      none: 'none',
    },
    pointerEvents: {
      none: 'none',
      auto: 'auto',
    },
    overflow: {
      auto: 'auto',
      hidden: 'hidden',
      scroll: 'scroll',
      scrollX: 'scrollX',
      scrollY: 'scrollY',
    },
    position: {
      static: 'static',
      relative: 'relative',
      absolute: 'absolute',
      fixed: 'fixed',
      sticky: 'sticky',
    },

    textTransform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
    },
  },
}

export const createCalicoTheme = (theme: ProvidedTheme) => {
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
