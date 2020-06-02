import clsx from 'clsx'

import * as styleRefs from './useGridStyles.treat'
import { ResponsiveSpace } from './useSpaceStyles'
import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

export const gridRules = {
  gridAutoFlow: {
    row: 'row',
    rowDense: 'row dense',
    column: 'column',
    columnDense: 'column dense',
  },
  gridTemplateColumns: {
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))',
    7: 'repeat(7, minmax(0, 1fr))',
    8: 'repeat(8, minmax(0, 1fr))',
    9: 'repeat(9, minmax(0, 1fr))',
    10: 'repeat(10, minmax(0, 1fr))',
    11: 'repeat(11, minmax(0, 1fr))',
    12: 'repeat(12, minmax(0, 1fr))',
    none: 'none',
  },
  gridTemplateRows: {
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))',
    none: 'none',
  },
  gridColumn: {
    auto: 'auto',
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-5': 'span 5 / span 5',
    'span-6': 'span 6 / span 6',
    'span-7': 'span 7 / span 7',
    'span-8': 'span 8 / span 8',
    'span-9': 'span 9 / span 9',
    'span-10': 'span 10 / span 10',
    'span-11': 'span 11 / span 11',
    'span-12': 'span 12 / span 12',
  },
  gridRow: {
    auto: 'auto',
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-5': 'span 5 / span 5',
    'span-6': 'span 6 / span 6',
  },
}

export type UseGridStylesProps = {
  gap?: ResponsiveSpace
  gridAutoFlow?: ResponsiveProp<keyof typeof styleRefs.gridAutoFlow>
  gridTemplateColumns?: ResponsiveProp<
    keyof typeof styleRefs.gridTemplateColumns
  >
  gridTemplateRows?: ResponsiveProp<keyof typeof styleRefs.gridTemplateRows>
  gridColumn?: ResponsiveProp<keyof typeof styleRefs.gridColumn>
  gridRow?: ResponsiveProp<keyof typeof styleRefs.gridRow>
}

export const useGridStyles = ({
  gap,
  gridAutoFlow,
  gridTemplateColumns,
  gridTemplateRows,
  gridColumn,
  gridRow,
}: UseGridStylesProps) => {
  return clsx(
    gap !== undefined &&
      resolveResponsiveProp(
        gap,
        styleRefs.gap,
        styleRefs.gapTablet,
        styleRefs.gapDesktop,
        styleRefs.gapDesktopWide,
      ),
    gridAutoFlow !== undefined &&
      resolveResponsiveProp(
        gridAutoFlow,
        styleRefs.gridAutoFlow,
        styleRefs.gridAutoFlowTablet,
        styleRefs.gridAutoFlowDesktop,
        styleRefs.gridAutoFlowDesktopWide,
      ),
    gridTemplateColumns !== undefined &&
      resolveResponsiveProp<string | number>(
        gridTemplateColumns,
        styleRefs.gridTemplateColumns,
        styleRefs.gridTemplateColumnsTablet,
        styleRefs.gridTemplateColumnsDesktop,
        styleRefs.gridTemplateColumnsDesktopWide,
      ),
    gridTemplateRows !== undefined &&
      resolveResponsiveProp<string | number>(
        gridTemplateRows,
        styleRefs.gridTemplateRows,
        styleRefs.gridTemplateRowsTablet,
        styleRefs.gridTemplateRowsDesktop,
        styleRefs.gridTemplateRowsDesktopWide,
      ),
    gridColumn !== undefined &&
      resolveResponsiveProp(
        gridColumn,
        styleRefs.gridColumn,
        styleRefs.gridColumnTablet,
        styleRefs.gridColumnDesktop,
        styleRefs.gridColumnDesktopWide,
      ),
    gridRow !== undefined &&
      resolveResponsiveProp(
        gridRow,
        styleRefs.gridRow,
        styleRefs.gridRowTablet,
        styleRefs.gridRowDesktop,
        styleRefs.gridRowDesktopWide,
      ),
  )
}
