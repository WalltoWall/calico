import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty } from './utils'

export const backgroundSize = styleMap((theme) =>
  pipe(theme.rules.backgroundSize, mapToProperty('backgroundSize')),
)

export const backgroundPositionX = styleMap((theme) =>
  pipe(theme.rules.backgroundPositionX, mapToProperty('backgroundPositionX')),
)

export const backgroundPositionY = styleMap((theme) =>
  pipe(theme.rules.backgroundPositionY, mapToProperty('backgroundPositionY')),
)

export const backgroundRepeat = styleMap((theme) =>
  pipe(theme.rules.backgroundRepeat, mapToProperty('backgroundRepeat')),
)

export const backgroundColor = styleMap((theme) =>
  pipe(theme.colors, mapToProperty('backgroundColor')),
)
