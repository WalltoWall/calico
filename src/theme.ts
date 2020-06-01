import { createResponsiveStyleFn } from './mq'

const grid = 0.25

const breakpoints = {
  mobile: 0,
  tablet: 192,
  desktop: 320,
  desktopWide: 360,
} as const

const mediaQueries = (Object.keys(
  breakpoints,
) as (keyof typeof breakpoints)[]).reduce((acc, key) => {
  acc[key] = `screen and (min-width: ${breakpoints[key] * grid}rem)`
  return acc
}, {} as Record<keyof typeof breakpoints, string>)

export type Theme = typeof theme

export const theme = {
  // Sizes
  breakpoints,
  sizes: breakpoints,
  mediaQueries,

  // Spacing
  grid,
  space: {
    [-16]: -16,
    [-15]: -15,
    [-14]: -14,
    [-13]: -13,
    [-12]: -12,
    [-11]: -11,
    [-10]: -10,
    [-9]: -9,
    [-8]: -8,
    [-7]: -7,
    [-6]: -6,
    [-5]: -5,
    [-4]: -4,
    [-3]: -3,
    [-2]: -2,
    [-1]: -1,
    0: 0,
    auto: 'auto',
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 14,
    15: 15,
    16: 16,
  },

  // Colors
  colors: {
    white: '#fff',

    'gray.10': '#102336',
    'gray.20': '#1E3852',
    'gray.50': '#758493',

    'green.50': '#52DDA3',

    'teal.50': '#6AA09D',

    'orange.60': '#D59D62',
    'orange.80': '#FFD0B5',
  },

  // Fonts
  fonts: {
    sans: {
      stack: '"Ilisarniq", system-ui',
      baseFontHeight: 11.25,
      descenderHeightScale: 0.04,
      capHeightScale: 0.675,
    },
    serif: {
      stack: '"F37 Bobby", serif',
      baseFontHeight: 11.15,
      descenderHeightScale: 0.15,
      capHeightScale: 0.705,
    },
  },
  fontWeights: {
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800,
    black: 900,
  },
  lineHeights: {
    solid: 1,
    title: 1,
    titleWide: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    none: '0',
    s: '0.05em',
    m: '0.1em',
    l: '0.2em',
  },

  // Borders
  borderWidths: {
    1: '1px',
    2: '2px',
  },
  borderStyles: {
    solid: 'solid',
  },
  borderRadii: {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    full: '50%',
  },

  // Z-Indicies
  zIndices: {
    base: 0,
  },

  // Transitions
  transitionDurations: {
    slow: 300,
    normal: 200,
    fast: 100,
  },
} as const

export const styleMq = createResponsiveStyleFn(
  Object.values(breakpoints)
    .filter(Boolean)
    .map((bp) => `${bp * 4}px`),
)
