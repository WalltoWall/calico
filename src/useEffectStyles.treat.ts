import { styleTree, styleMap } from 'treat'
import * as R from 'fp-ts/es6/Record'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapFromOptionalTheme, responsiveStyle } from './utils'

export const opacity = styleTree((theme) =>
  pipe(
    theme.rules.opacity,
    mapFromOptionalTheme(mapToProperty('opacity')),
    responsiveStyle(theme),
    R.map(styleMap),
  ),
)
