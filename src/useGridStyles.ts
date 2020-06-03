import clsx from 'clsx'
import { useStyles } from 'react-treat'

import { ResponsiveSpace } from './useSpaceStyles'
import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as styleRefs from './useGridStyles.treat'

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
} as const

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
  const styles = useStyles(styleRefs)

  return clsx(
    gap !== undefined &&
      resolveResponsiveProp(
        gap,
        styles.gap,
        styles.gapTablet,
        styles.gapDesktop,
        styles.gapDesktopWide,
      ),
    gridAutoFlow !== undefined &&
      resolveResponsiveProp(
        gridAutoFlow,
        styles.gridAutoFlow,
        styles.gridAutoFlowTablet,
        styles.gridAutoFlowDesktop,
        styles.gridAutoFlowDesktopWide,
      ),
    gridTemplateColumns !== undefined &&
      resolveResponsiveProp<string | number>(
        gridTemplateColumns,
        styles.gridTemplateColumns,
        styles.gridTemplateColumnsTablet,
        styles.gridTemplateColumnsDesktop,
        styles.gridTemplateColumnsDesktopWide,
      ),
    gridTemplateRows !== undefined &&
      resolveResponsiveProp<string | number>(
        gridTemplateRows,
        styles.gridTemplateRows,
        styles.gridTemplateRowsTablet,
        styles.gridTemplateRowsDesktop,
        styles.gridTemplateRowsDesktopWide,
      ),
    gridColumn !== undefined &&
      resolveResponsiveProp(
        gridColumn,
        styles.gridColumn,
        styles.gridColumnTablet,
        styles.gridColumnDesktop,
        styles.gridColumnDesktopWide,
      ),
    gridRow !== undefined &&
      resolveResponsiveProp(
        gridRow,
        styles.gridRow,
        styles.gridRowTablet,
        styles.gridRowDesktop,
        styles.gridRowDesktopWide,
      ),
  )
}
