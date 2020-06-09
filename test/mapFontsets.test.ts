import { mapFontsets } from '../src'
import { theme } from './fixtures/theme'

test('mapFontsets', () => {
  expect(
    mapFontsets(theme, {
      sans1: {
        //@ts-ignore
        fontFamily: 'sans',
        fontSize: {
          mobile: 1,
          tablet: 1.25,
        },
        lineHeightScale: 1.4,
      },
    }),
  ).toMatchInlineSnapshot(`
    Object {
      "sans1": Object {
        "@media": Object {
          "screen and (min-width: 0rem)": Object {
            ":before": Object {
              "content": "''",
              "display": "block",
              "height": 0,
              "marginTop": "-0.33999999999999986rem",
            },
            "fontSize": "1rem",
            "lineHeight": "0.9624999999999999rem",
            "paddingTop": 1,
            "transform": "translateY(0.10124999999999995em)",
          },
          "screen and (min-width: 48rem)": Object {
            ":before": Object {
              "content": "''",
              "display": "block",
              "height": 0,
              "marginTop": "-0.40937499999999993rem",
            },
            "fontSize": "1.25rem",
            "lineHeight": "1.203125rem",
            "paddingTop": 1,
            "transform": "translateY(0.10125em)",
          },
        },
      },
    }
  `)
})
