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

  fonts: Record<string, any>

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

  // Fonts
  fonts: {},

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

    // Grid

    // Flexbox
    alignItems: {
      center: 'center',
      start: 'flex-start',
      end: 'flex-end',
      baseline: 'baseline',
    },
    alignContent: {
      center: 'center',
      start: 'flex-start',
      end: 'flex-end',
      baseline: 'baseline',
    },
    alignSelf: {
      center: 'center',
      start: 'flex-start',
      end: 'flex-end',
      baseline: 'baseline',
    },
    justifyItems: {
      center: 'center',
      start: 'flex-start',
      end: 'flex-end',
    },
    justifyContent: {
      center: 'center',
      start: 'flex-start',
      end: 'flex-end',
      spaceBetween: 'space-between',
    },
    justifySelf: {
      center: 'center',
      start: 'flex-start',
      end: 'flex-end',
    },
    flexWrap: {
      wrap: 'wrap',
      nowrap: 'nowrap',
    },
    flexDirection: {
      row: 'row',
      rowReverse: 'row-reverse',
      column: 'column',
      columnReverse: 'column-reverse',
    },
    flexGrow: {
      0: 0,
      1: 1,
    },
    flexShrink: {
      0: 0,
      1: 1,
    },
    flex: {
      equal0: '1 1 0px',
    },
    flexBasis: {
      0: '0px',
      1: '10%',
      2: '20%',
      3: '30%',
      4: '40%',
      5: '50%',
      6: '60%',
      7: '70%',
      8: '80%',
      auto: 'auto',
    },
    // Borders
    borderWidth: {
      none: 0,
      '1px': '1px',
    },
    borderStyle: {
      none: 'none',
      solid: 'solid',
      dotted: 'dotted',
      dashed: 'dashed',
    },
    borderRadius: {
      none: 0,
    },

    // Effects
    opacity: {
      0: 0,
      25: 0.25,
      50: 0.5,
      75: 0.75,
      100: 1,
    },

    // Background
    backgroundSize: {
      cover: 'cover',
      contain: 'contain',
    },
    backgroundPositionX: {
      left: 'left',
      center: 'center',
      right: 'right',
    },
    backgroundPositionY: {
      top: 'top',
      center: 'center',
      bottom: 'bottom',
    },
    backgroundRepeat: {
      repeat: 'repeat',
      'repeat-x': 'repeat-x',
      'repeat-y': 'repeat-y',
      'no-repeat': 'no-repeat',
    },
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
