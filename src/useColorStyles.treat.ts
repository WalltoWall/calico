import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'

export const backgroundColor = styleMap((theme) =>
  pipe(theme.colors, mapToProperty('backgroundColor')),
)

export const borderColor = styleMap((theme) =>
  pipe(theme.colors, mapToProperty('borderColor')),
)

export const color = styleMap((theme) =>
  pipe(theme.colors, mapToProperty('color'), mapToResponsive('mobile', theme)),
)
export const colorTablet = styleMap((theme) =>
  pipe(theme.colors, mapToProperty('color'), mapToResponsive('tablet', theme)),
)
export const colorDesktop = styleMap((theme) =>
  pipe(theme.colors, mapToProperty('color'), mapToResponsive('desktop', theme)),
)
export const colorDesktopWide = styleMap((theme) =>
  pipe(
    theme.colors,
    mapToProperty('color'),
    mapToResponsive('desktopWide', theme),
  ),
)
