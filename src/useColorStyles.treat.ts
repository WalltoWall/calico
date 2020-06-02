import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import {
  mapToProperty,
  mapToResponsive,
  mapToResponsiveProperty,
} from './utils'

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

export type Opacity = keyof typeof opacityRules
const opacityRules = {
  0: 0,
  25: '0.25',
  50: '0.50',
  75: '0.75',
  100: '1',
}
export const opacity = styleMap((theme) =>
  pipe(opacityRules, mapToResponsiveProperty('opacity', 'mobile', theme)),
)
export const opacityTablet = styleMap((theme) =>
  pipe(opacityRules, mapToResponsiveProperty('opacity', 'tablet', theme)),
)
export const opacityDesktop = styleMap((theme) =>
  pipe(opacityRules, mapToResponsiveProperty('opacity', 'desktop', theme)),
)
export const opacityDesktopWide = styleMap((theme) =>
  pipe(opacityRules, mapToResponsiveProperty('opacity', 'desktopWide', theme)),
)
