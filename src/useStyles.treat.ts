import { styleTree, styleMap } from 'treat'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapFromOptionalTheme, responsiveStyle } from './utils'

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
