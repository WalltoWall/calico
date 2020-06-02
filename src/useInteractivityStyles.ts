import clsx from 'clsx'

import * as styleRefs from './useInteractivityStyles.treat'
import { resolveResponsiveProp } from './utils'
import { ResponsiveProp } from './types'

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
}

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
  return clsx(
    outline !== undefined && styleRefs.outline[outline],
    userSelect !== undefined && styleRefs.userSelect[userSelect],
    pointerEvents !== undefined &&
      resolveResponsiveProp(
        pointerEvents,
        styleRefs.pointerEvents,
        styleRefs.pointerEventsTablet,
        styleRefs.pointerEventsDesktop,
        styleRefs.pointerEventsDesktopWide,
      ),
  )
}
