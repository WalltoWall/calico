import mergeWith from 'lodash.mergewith'

export const mergeCalicoTokens = <T1, T2, T3, T4>(
  t1: T1,
  t2?: T2,
  t3?: T3,
  t4?: T4,
) =>
  mergeWith(t1, t2, t3, t3, t4, (value) =>
    Array.isArray(value) ? value : undefined,
  )
