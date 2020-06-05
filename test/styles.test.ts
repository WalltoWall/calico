import util from 'util'
import { map, mapWithIndex } from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'
import { Theme } from 'treat/theme'

import {
  mapToProperty,
  mapFromOptionalTheme,
  responsiveStyle,
} from '../src/utils'
import { createCalicoTheme, baseCalicoTheme } from '../src'

const isResponsiveStyle = (
  theme: Theme,
  //@ts-ignore
  ruleName: keyof Theme['variants'],
  //@ts-ignore
): boolean => Boolean(theme.variants?.[ruleName]?.responsive)

const theme = createCalicoTheme({
  // Sizes
  breakpoints: {
    mobile: 0,
    tablet: 192,
    desktop: 300,
    desktopWide: 360,
  },

  // Spacing
  grid: 0.25,
  space: {
    auto: 'auto',
    [-2]: -2,
    [-1.5]: -1.5,
    [-1]: -1,
    [-0.5]: -0.5,
    0: 0,
    0.5: 0.5,
    1: 1,
    1.5: 1.5,
    2: 2,
  },

  // Fonts
  fonts: {
    sans: {
      stack: 'system-ui',
      baseFontHeight: 11,
      descenderHeightScale: 0.12,
      capHeightScale: 0.685,
    },
  },

  rules: {
    color: {
      white: '#fff',
      black: '#000',
    },
    maxWidth: {
      small: '48rem',
      medium: '60rem',
      large: '75rem',
      xlarge: '90rem',
    },
    lineHeight: {
      solid: 1,
    },
    letterSpacing: {
      ...baseCalicoTheme.rules.letterSpacing,
      s: '0.05em',
      m: '0.1em',
      l: '0.2em',
    },
    transitionDuration: {
      slow: '300ms',
      normal: '200ms',
      fast: '100ms',
    },
  },

  variants: {
    maxWidth: {
      responsive: true,
    },
    color: {
      responsive: true,
    },
  },
})

const styleMap = jest.fn((x) => x)

const styles = pipe(
  theme.rules as Required<typeof theme.rules>,
  mapWithIndex((ruleName, rule) =>
    pipe(rule, mapFromOptionalTheme(mapToProperty(ruleName)), (styles) => {
      if (isResponsiveStyle(theme, ruleName))
        return pipe(responsiveStyle(theme)(styles), map(styleMap))

      return styleMap(styles)
    }),
  ),
)

test('what', () => {
  console.log(util.inspect(styles, false, null, true))
})
