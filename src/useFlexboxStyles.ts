import clsx from 'clsx'
import { useStyles } from 'react-treat'

import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as styleRefs from './useFlexboxStyles.treat'

export const flexboxRules = {
  alignItems: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
  },
  alignContent: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
  },
  alignSelf: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
  },
  justifyItems: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
  },
  justifyContent: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    spaceBetween: 'space-between',
  },
  justifySelf: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
  },
  flexWrap: {
    wrap: 'wrap',
    nowrap: 'nowrap',
  },
  flexDirection: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse',
  },
  flexGrow: {
    0: 0,
    1: 1,
  },
  flexShrink: {
    0: 0,
    1: 1,
  },
  flex: {
    equal0: '1 1 0px',
  },
  flexBasis: {
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
  },
} as const

export type UseFlexboxStylesProps = {
  alignItems?: ResponsiveProp<keyof typeof styleRefs.alignItems>
  alignContent?: ResponsiveProp<keyof typeof styleRefs.alignContent>
  alignSelf?: ResponsiveProp<keyof typeof styleRefs.alignSelf>
  justifyItems?: ResponsiveProp<keyof typeof styleRefs.justifyItems>
  justifyContent?: ResponsiveProp<keyof typeof styleRefs.justifyContent>
  justifySelf?: ResponsiveProp<keyof typeof styleRefs.justifySelf>
  flexWrap?: keyof typeof styleRefs.flexWrap
  flexDirection?: ResponsiveProp<keyof typeof styleRefs.flexDirection>
  flexGrow?: keyof typeof styleRefs.flexGrow
  flexShrink?: keyof typeof styleRefs.flexShrink
  flex?: keyof typeof styleRefs.flex
  flexBasis?: keyof typeof styleRefs.flexBasis
}

export const useFlexboxStyles = ({
  alignItems,
  alignContent,
  alignSelf,
  justifyItems,
  justifyContent,
  justifySelf,
  flexWrap,
  flexDirection,
  flexGrow,
  flexShrink,
  flex,
  flexBasis,
}: UseFlexboxStylesProps) => {
  const styles = useStyles(styleRefs)

  return clsx(
    alignItems !== undefined &&
      resolveResponsiveProp(
        alignItems,
        styles.alignItems,
        styles.alignItemsTablet,
        styles.alignItemsDesktop,
        styles.alignItemsDesktopWide,
      ),
    alignContent !== undefined &&
      resolveResponsiveProp(
        alignContent,
        styles.alignContent,
        styles.alignContentTablet,
        styles.alignContentDesktop,
        styles.alignContentDesktopWide,
      ),
    alignSelf !== undefined &&
      resolveResponsiveProp(
        alignSelf,
        styles.alignSelf,
        styles.alignSelfTablet,
        styles.alignSelfDesktop,
        styles.alignSelfDesktopWide,
      ),
    justifyItems !== undefined &&
      resolveResponsiveProp(
        justifyItems,
        styles.justifyItems,
        styles.justifyItemsTablet,
        styles.justifyItemsDesktop,
        styles.justifyItemsDesktopWide,
      ),
    justifyContent !== undefined &&
      resolveResponsiveProp(
        justifyContent,
        styles.justifyContent,
        styles.justifyContentTablet,
        styles.justifyContentDesktop,
        styles.justifyContentDesktopWide,
      ),
    justifySelf !== undefined &&
      resolveResponsiveProp(
        justifySelf,
        styles.justifySelf,
        styles.justifySelfTablet,
        styles.justifySelfDesktop,
        styles.justifySelfDesktopWide,
      ),
    flexWrap !== undefined && styles.flexWrap[flexWrap],
    flexDirection !== undefined &&
      resolveResponsiveProp(
        flexDirection,
        styles.flexDirection,
        styles.flexDirectionTablet,
        styles.flexDirectionDesktop,
        styles.flexDirectionDesktopWide,
      ),
    flexGrow !== undefined && styles.flexGrow[flexGrow],
    flexShrink !== undefined && styles.flexShrink[flexShrink],
    flex !== undefined && styles.flex[flex],
    flexBasis !== undefined && styles.flexBasis[flexBasis],
  )
}
