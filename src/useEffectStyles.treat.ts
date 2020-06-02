import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToResponsiveProperty } from './utils'

export const opacity = styleMap((theme) =>
  pipe(
    theme.rules.opacity,
    mapToResponsiveProperty('opacity', 'mobile', theme),
  ),
)
export const opacityTablet = styleMap((theme) =>
  pipe(
    theme.rules.opacity,
    mapToResponsiveProperty('opacity', 'tablet', theme),
  ),
)
export const opacityDesktop = styleMap((theme) =>
  pipe(
    theme.rules.opacity,
    mapToResponsiveProperty('opacity', 'desktop', theme),
  ),
)
export const opacityDesktopWide = styleMap((theme) =>
  pipe(
    theme.rules.opacity,
    mapToResponsiveProperty('opacity', 'desktopWide', theme),
  ),
)
