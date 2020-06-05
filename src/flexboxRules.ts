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
