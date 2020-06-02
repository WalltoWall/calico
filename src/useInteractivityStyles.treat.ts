import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'

export const outline = styleMap((theme) =>
  pipe(theme.rules.outline, mapToProperty('outline')),
)

export const userSelect = styleMap((theme) =>
  pipe(theme.rules.userSelect, mapToProperty('userSelect')),
)

export const pointerEvents = styleMap((theme) =>
  pipe(
    theme.rules.pointerEvents,
    mapToProperty('pointerEvents'),
    mapToResponsive('mobile', theme),
  ),
)
export const pointerEventsTablet = styleMap((theme) =>
  pipe(
    theme.rules.pointerEvents,
    mapToProperty('pointerEvents'),
    mapToResponsive('tablet', theme),
  ),
)
export const pointerEventsDesktop = styleMap((theme) =>
  pipe(
    theme.rules.pointerEvents,
    mapToProperty('pointerEvents'),
    mapToResponsive('desktop', theme),
  ),
)
export const pointerEventsDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.pointerEvents,
    mapToProperty('pointerEvents'),
    mapToResponsive('desktopWide', theme),
  ),
)
