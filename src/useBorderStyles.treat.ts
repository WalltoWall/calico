import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty } from './utils'
import { theme } from './theme'

export const borderRadius = pipe(
  theme.borderRadii,
  mapToProperty('borderRadius'),
  styleMap,
)

export const borderTop = pipe(
  theme.borderWidths,
  mapToProperty('borderTopWidth'),
  styleMap,
)
export const borderBottom = pipe(
  theme.borderWidths,
  mapToProperty('borderBottomWidth'),
  styleMap,
)
export const borderLeft = pipe(
  theme.borderWidths,
  mapToProperty('borderLeftWidth'),
  styleMap,
)
export const borderRight = pipe(
  theme.borderWidths,
  mapToProperty('borderRightWidth'),
  styleMap,
)

export const borderStyle = pipe(
  theme.borderStyles,
  mapToProperty('borderStyle'),
  styleMap,
)
