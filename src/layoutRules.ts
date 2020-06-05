export const layoutRules = {
  display: {
    none: 'none',
    inline: 'inline',
    block: 'block',
    inlineBlock: 'inline-block',
    flex: 'flex',
    inlineFlex: 'inline-flex',
    grid: 'grid',
    inlineGrid: 'inline-grid',
  },
  overflow: {
    auto: 'auto',
    hidden: 'hidden',
    scroll: 'scroll',
    scrollX: 'scrollX',
    scrollY: 'scrollY',
  },
  position: {
    static: 'static',
    relative: 'relative',
    absolute: 'absolute',
    fixed: 'fixed',
    sticky: 'sticky',
  },
  top: {
    auto: 'auto',
    0: 0,
  },
  right: {
    auto: 'auto',
    0: 0,
  },
  bottom: {
    auto: 'auto',
    0: 0,
  },
  left: {
    auto: 'auto',
    0: 0,
  },
  zIndex: {
    auto: 'auto',
    [-1]: -1,
    0: 1,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  },
} as const
