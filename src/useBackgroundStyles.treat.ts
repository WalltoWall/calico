import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty } from './utils'

export const backgroundColor = styleMap((theme) =>
  pipe(theme.colors, mapToProperty('backgroundColor')),
)
