import { styleTree, styleMap } from 'treat'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import {
  mapToProperty,
  mapFromOptionalTheme,
  responsiveStyle,
  variantResponsiveStyle,
} from './utils'

export const styles = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.mapWithIndex((ruleName, rule) =>
      pipe(
        rule,
        mapFromOptionalTheme(mapToProperty(ruleName)),
        responsiveStyle(theme),
      ),
    ),
    R.map(R.map(styleMap)),
  ),
)

export const hoverStyles = styleTree((theme) =>
  pipe(
    theme.rules as Required<typeof theme.rules>,
    R.filterWithIndex((ruleName) => Boolean(theme.variants[ruleName]?.hover)),
    R.mapWithIndex((ruleName: keyof typeof theme.variants, rule) =>
      pipe(
        rule,
        mapFromOptionalTheme(mapToProperty(ruleName)),
        variantResponsiveStyle(theme)(':hover'),
      ),
    ),
    R.map(R.map(styleMap)),
  ),
)
