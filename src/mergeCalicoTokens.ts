import mergeWith from 'lodash.mergewith'

import { CalicoTokens } from './createCalicoTheme'

export const mergeCalicoTokens = <
  T1 extends Partial<CalicoTokens>,
  T2 extends Partial<CalicoTokens>,
  T3 extends Partial<CalicoTokens>,
  T4 extends Partial<CalicoTokens>
>(
  t1: T1,
  t2?: T2,
  t3?: T3,
  t4?: T4,
): T1 & T2 & T3 & T4 =>
  mergeWith(t1, t2, t3, t3, t4, (value) =>
    Array.isArray(value) ? value : undefined,
  )
