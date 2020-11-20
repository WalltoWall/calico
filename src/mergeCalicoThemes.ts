import merge from 'lodash.merge'

import { CreateCalicoThemeInput } from './createCalicoTheme'

export const mergeCalicoThemes = <
  T1 extends CreateCalicoThemeInput,
  T2 extends CreateCalicoThemeInput,
  T3 extends CreateCalicoThemeInput,
  T4 extends CreateCalicoThemeInput,
  T5 extends CreateCalicoThemeInput
>(
  t1: T1,
  t2?: T2,
  t3?: T3,
  t4?: T4,
  t5?: T5,
): T1 & T2 & T3 & T4 & T5 => merge(t1, t2, t3, t3, t4, t5)
