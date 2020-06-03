import clsx from 'clsx'
import { useStyles } from 'react-treat'

import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

import * as styleRefs from './useInteractivityStyles.treat'

export const interactivityRules = {
  outline: {
    none: 'none',
  },
  userSelect: {
    none: 'none',
  },
  pointerEvents: {
    none: 'none',
    auto: 'auto',
  },
} as const

export type UseInteractivityStylesProps = {
  outline?: keyof typeof styleRefs.outline
  userSelect?: keyof typeof styleRefs.userSelect
  pointerEvents?: ResponsiveProp<keyof typeof styleRefs.pointerEvents>
}

export const useInteractivityStyles = ({
  outline,
  userSelect,
  pointerEvents,
}: UseInteractivityStylesProps) => {
  const styles = useStyles(styleRefs)

  return clsx(
    outline !== undefined && styles.outline[outline],
    userSelect !== undefined && styles.userSelect[userSelect],
    pointerEvents !== undefined &&
      resolveResponsiveProp(
        pointerEvents,
        styles.pointerEvents,
        styles.pointerEventsTablet,
        styles.pointerEventsDesktop,
        styles.pointerEventsDesktopWide,
      ),
  )
}
