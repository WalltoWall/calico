import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty } from './utils'

export const borderColor = styleMap((theme) =>
  pipe(theme.colors, mapToProperty('borderColor')),
)

export const borderWidth = styleMap((theme) =>
  pipe(theme.rules.borderWidth, mapToProperty('borderWidth')),
)
export const borderTopWidth = styleMap((theme) =>
  pipe(theme.rules.borderWidth, mapToProperty('borderTopWidth')),
)
export const borderBottomWidth = styleMap((theme) =>
  pipe(theme.rules.borderWidth, mapToProperty('borderBottomWidth')),
)
export const borderLeftWidth = styleMap((theme) =>
  pipe(theme.rules.borderWidth, mapToProperty('borderLeftWidth')),
)
export const borderRightWidth = styleMap((theme) =>
  pipe(theme.rules.borderWidth, mapToProperty('borderRightWidth')),
)

export const borderStyle = styleMap((theme) =>
  pipe(theme.rules.borderStyle, mapToProperty('borderStyle')),
)

export const borderRadius = styleMap((theme) =>
  pipe(theme.rules.borderWidth, mapToProperty('borderRadius')),
)
