import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty } from './utils'

export const borderRadius = styleMap((theme) =>
  pipe(theme.borderRadii, mapToProperty('borderRadius')),
)

export const borderTop = styleMap((theme) =>
  pipe(theme.borderWidths, mapToProperty('borderTopWidth')),
)
export const borderBottom = styleMap((theme) =>
  pipe(theme.borderWidths, mapToProperty('borderBottomWidth')),
)
export const borderLeft = styleMap((theme) =>
  pipe(theme.borderWidths, mapToProperty('borderLeftWidth')),
)
export const borderRight = styleMap((theme) =>
  pipe(theme.borderWidths, mapToProperty('borderRightWidth')),
)

export const borderStyle = styleMap((theme) =>
  pipe(theme.borderStyles, mapToProperty('borderStyle')),
)
