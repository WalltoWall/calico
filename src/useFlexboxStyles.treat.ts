import { styleMap } from 'treat'
import { pipe } from 'fp-ts/es6/pipeable'

import { mapToProperty, mapToResponsive } from './utils'

export const alignItemsRules = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  baseline: 'baseline',
}
export const alignItems = styleMap((theme) =>
  pipe(
    alignItemsRules,
    mapToProperty('alignItems'),
    mapToResponsive('mobile', theme),
  ),
)
export const alignItemsTablet = styleMap((theme) =>
  pipe(
    alignItemsRules,
    mapToProperty('alignItems'),
    mapToResponsive('tablet', theme),
  ),
)
export const alignItemsDesktop = styleMap((theme) =>
  pipe(
    alignItemsRules,
    mapToProperty('alignItems'),
    mapToResponsive('desktop', theme),
  ),
)
export const alignItemsDesktopWide = styleMap((theme) =>
  pipe(
    alignItemsRules,
    mapToProperty('alignItems'),
    mapToResponsive('desktopWide', theme),
  ),
)

const alignContentRules = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  baseline: 'baseline',
}
export const alignContent = styleMap((theme) =>
  pipe(
    alignContentRules,
    mapToProperty('alignContent'),
    mapToResponsive('mobile', theme),
  ),
)
export const alignContentTablet = styleMap((theme) =>
  pipe(
    alignContentRules,
    mapToProperty('alignContent'),
    mapToResponsive('tablet', theme),
  ),
)
export const alignContentDesktop = styleMap((theme) =>
  pipe(
    alignContentRules,
    mapToProperty('alignContent'),
    mapToResponsive('desktop', theme),
  ),
)
export const alignContentDesktopWide = styleMap((theme) =>
  pipe(
    alignContentRules,
    mapToProperty('alignContent'),
    mapToResponsive('desktopWide', theme),
  ),
)

const alignSelfRules = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  baseline: 'baseline',
}
export const alignSelf = styleMap((theme) =>
  pipe(
    alignSelfRules,
    mapToProperty('alignSelf'),
    mapToResponsive('mobile', theme),
  ),
)
export const alignSelfTablet = styleMap((theme) =>
  pipe(
    alignSelfRules,
    mapToProperty('alignSelf'),
    mapToResponsive('tablet', theme),
  ),
)
export const alignSelfDesktop = styleMap((theme) =>
  pipe(
    alignSelfRules,
    mapToProperty('alignSelf'),
    mapToResponsive('desktop', theme),
  ),
)
export const alignSelfDesktopWide = styleMap((theme) =>
  pipe(
    alignSelfRules,
    mapToProperty('alignSelf'),
    mapToResponsive('desktopWide', theme),
  ),
)

export const justifyItemsRules = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
}
export const justifyItems = styleMap((theme) =>
  pipe(
    justifyItemsRules,
    mapToProperty('justifyItems'),
    mapToResponsive('mobile', theme),
  ),
)
export const justifyItemsTablet = styleMap((theme) =>
  pipe(
    justifyItemsRules,
    mapToProperty('justifyItems'),
    mapToResponsive('tablet', theme),
  ),
)
export const justifyItemsDesktop = styleMap((theme) =>
  pipe(
    justifyItemsRules,
    mapToProperty('justifyItems'),
    mapToResponsive('desktop', theme),
  ),
)
export const justifyItemsDesktopWide = styleMap((theme) =>
  pipe(
    justifyItemsRules,
    mapToProperty('justifyItems'),
    mapToResponsive('desktopWide', theme),
  ),
)

export const justifyContentRules = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  spaceBetween: 'space-between',
}
export const justifyContent = styleMap((theme) =>
  pipe(
    justifyContentRules,
    mapToProperty('justifyContent'),
    mapToResponsive('mobile', theme),
  ),
)
export const justifyContentTablet = styleMap((theme) =>
  pipe(
    justifyContentRules,
    mapToProperty('justifyContent'),
    mapToResponsive('tablet', theme),
  ),
)
export const justifyContentDesktop = styleMap((theme) =>
  pipe(
    justifyContentRules,
    mapToProperty('justifyContent'),
    mapToResponsive('desktop', theme),
  ),
)
export const justifyContentDesktopWide = styleMap((theme) =>
  pipe(
    justifyContentRules,
    mapToProperty('justifyContent'),
    mapToResponsive('desktopWide', theme),
  ),
)

const justifySelfRules = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
}
export const justifySelf = styleMap((theme) =>
  pipe(
    justifySelfRules,
    mapToProperty('justifySelf'),
    mapToResponsive('mobile', theme),
  ),
)
export const justifySelfTablet = styleMap((theme) =>
  pipe(
    justifySelfRules,
    mapToProperty('justifySelf'),
    mapToResponsive('tablet', theme),
  ),
)
export const justifySelfDesktop = styleMap((theme) =>
  pipe(
    justifySelfRules,
    mapToProperty('justifySelf'),
    mapToResponsive('desktop', theme),
  ),
)
export const justifySelfDesktopWide = styleMap((theme) =>
  pipe(
    justifySelfRules,
    mapToProperty('justifySelf'),
    mapToResponsive('desktopWide', theme),
  ),
)

const flexWrapRules = {
  wrap: 'wrap',
  nowrap: 'nowrap',
}
export const flexWrap = styleMap((theme) =>
  pipe(flexWrapRules, mapToProperty('flexWrap')),
)

const flexDirectionRules = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
}
export const flexDirection = styleMap((theme) =>
  pipe(
    flexDirectionRules,
    mapToProperty('flexDirection'),
    mapToResponsive('mobile', theme),
  ),
)
export const flexDirectionTablet = styleMap((theme) =>
  pipe(
    flexDirectionRules,
    mapToProperty('flexDirection'),
    mapToResponsive('tablet', theme),
  ),
)
export const flexDirectionDesktop = styleMap((theme) =>
  pipe(
    flexDirectionRules,
    mapToProperty('flexDirection'),
    mapToResponsive('desktop', theme),
  ),
)
export const flexDirectionDesktopWide = styleMap((theme) =>
  pipe(
    flexDirectionRules,
    mapToProperty('flexDirection'),
    mapToResponsive('desktopWide', theme),
  ),
)

const flexGrowRules = {
  0: 0,
  1: 1,
}
export const flexGrow = styleMap((theme) =>
  pipe(flexGrowRules, mapToProperty('flexGrow')),
)

const flexShrinkRules = {
  0: 0,
  1: 1,
}
export const flexShrink = styleMap((theme) =>
  pipe(flexShrinkRules, mapToProperty('flexShrink')),
)

const flexRules = {
  equal0: '1 1 0px',
}
export const flex = styleMap((theme) => pipe(flexRules, mapToProperty('flex')))

const flexBasisRules = {
  0: '0px',
  1: '10%',
  2: '20%',
  3: '30%',
  4: '40%',
  5: '50%',
  6: '60%',
  7: '70%',
  8: '80%',
  auto: 'auto',
}
export const flexBasis = styleMap((theme) =>
  pipe(flexBasisRules, mapToProperty('flexBasis')),
)
