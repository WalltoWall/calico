import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import {
  mapToProperty,
  mapFromOptionalTheme,
  variantResponsiveStyle,
} from '../src/utils'
import { createCalicoTheme, baseCalicoTheme } from '../src'

const space = {
  auto: 'auto',
  [-2]: '-0.5rem',
  [-1.5]: '-0.5rem',
  [-1]: '-0.25rem',
  [-0.5]: '-0.125rem',
  0: 0,
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
}

const colors = {
  white: '#fff',
  black: '#000',
}

export const theme = createCalicoTheme({
  // Sizes
  breakpoints: {
    mobile: 0,
    tablet: 192,
    desktop: 300,
    desktopWide: 360,
  },

  // Spacing
  grid: 0.25,

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
    colors,
    borderColor: colors,

    margin: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    padding: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,

    fontFamily: {
      sans: 'system-ui',
    },

    gap: space,

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
})

const styleMap = jest.fn((x) => {
  console.log(x)
  return x
})

export const hoverStyles = pipe(
  theme.rules as Required<typeof theme.rules>,
  R.filterWithIndex((ruleName: any) =>
    // @ts-ignore
    Boolean(theme?.variants?.[ruleName]?.hover),
  ),
  R.mapWithIndex((ruleName: any, rule) =>
    pipe(
      rule,
      mapFromOptionalTheme(mapToProperty(ruleName)),
      variantResponsiveStyle(theme)(':hover'),
    ),
  ),
  R.map(R.map(styleMap)),
)

test.only('test', () => {
  console.log(hoverStyles)
})
