import { StandardProperties } from 'csstype'
import mergeWith from 'lodash.mergewith'

import { CalicoTokens } from './createCalicoTheme'
import { Pseudos, Rules } from './types'

export function mergeCalicoTokens<
  T1BreakpointKeys extends string,
  T1RulesKeys extends keyof StandardProperties,
  T1Rules extends Rules<T1RulesKeys>,
  T1Pseudos extends Pseudos<T1RulesKeys>,
  T1 extends CalicoTokens<T1BreakpointKeys, T1RulesKeys, T1Rules, T1Pseudos>
>(t1: T1): T1
export function mergeCalicoTokens<
  T1BreakpointKeys extends string,
  T1RulesKeys extends keyof StandardProperties,
  T1Rules extends Rules<T1RulesKeys>,
  T1Pseudos extends Pseudos<T1RulesKeys>,
  T1 extends CalicoTokens<T1BreakpointKeys, T1RulesKeys, T1Rules, T1Pseudos>,
  T2BreakpointKeys extends string,
  T2RulesKeys extends keyof StandardProperties,
  T2Rules extends Rules<T2RulesKeys>,
  T2Pseudos extends Pseudos<T2RulesKeys>,
  T2 extends CalicoTokens<T2BreakpointKeys, T2RulesKeys, T2Rules, T2Pseudos>
>(t1: T1, t2: T2): T1 & T2
export function mergeCalicoTokens<
  T1BreakpointKeys extends string,
  T1RulesKeys extends keyof StandardProperties,
  T1Rules extends Rules<T1RulesKeys>,
  T1Pseudos extends Pseudos<T1RulesKeys>,
  T1 extends CalicoTokens<T1BreakpointKeys, T1RulesKeys, T1Rules, T1Pseudos>,
  T2BreakpointKeys extends string,
  T2RulesKeys extends keyof StandardProperties,
  T2Rules extends Rules<T2RulesKeys>,
  T2Pseudos extends Pseudos<T2RulesKeys>,
  T2 extends CalicoTokens<T2BreakpointKeys, T2RulesKeys, T2Rules, T2Pseudos>,
  T3BreakpointKeys extends string,
  T3RulesKeys extends keyof StandardProperties,
  T3Rules extends Rules<T3RulesKeys>,
  T3Pseudos extends Pseudos<T3RulesKeys>,
  T3 extends CalicoTokens<T3BreakpointKeys, T3RulesKeys, T3Rules, T3Pseudos>
>(t1: T1, t2: T2, t3: T3): T1 & T2 & T3
export function mergeCalicoTokens<
  T1BreakpointKeys extends string,
  T1RulesKeys extends keyof StandardProperties,
  T1Rules extends Rules<T1RulesKeys>,
  T1Pseudos extends Pseudos<T1RulesKeys>,
  T1 extends CalicoTokens<T1BreakpointKeys, T1RulesKeys, T1Rules, T1Pseudos>,
  T2BreakpointKeys extends string,
  T2RulesKeys extends keyof StandardProperties,
  T2Rules extends Rules<T2RulesKeys>,
  T2Pseudos extends Pseudos<T2RulesKeys>,
  T2 extends CalicoTokens<T2BreakpointKeys, T2RulesKeys, T2Rules, T2Pseudos>,
  T3BreakpointKeys extends string,
  T3RulesKeys extends keyof StandardProperties,
  T3Rules extends Rules<T3RulesKeys>,
  T3Pseudos extends Pseudos<T3RulesKeys>,
  T3 extends CalicoTokens<T3BreakpointKeys, T3RulesKeys, T3Rules, T3Pseudos>,
  T4BreakpointKeys extends string,
  T4RulesKeys extends keyof StandardProperties,
  T4Rules extends Rules<T4RulesKeys>,
  T4Pseudos extends Pseudos<T4RulesKeys>,
  T4 extends CalicoTokens<T4BreakpointKeys, T4RulesKeys, T4Rules, T4Pseudos>
>(t1: T1, t2: T2, t3: T3, t4: T4): T1 & T2 & T3 & T4
export function mergeCalicoTokens<
  T1BreakpointKeys extends string,
  T1RulesKeys extends keyof StandardProperties,
  T1Rules extends Rules<T1RulesKeys>,
  T1Pseudos extends Pseudos<T1RulesKeys>,
  T1 extends CalicoTokens<T1BreakpointKeys, T1RulesKeys, T1Rules, T1Pseudos>,
  T2BreakpointKeys extends string,
  T2RulesKeys extends keyof StandardProperties,
  T2Rules extends Rules<T2RulesKeys>,
  T2Pseudos extends Pseudos<T2RulesKeys>,
  T2 extends CalicoTokens<T2BreakpointKeys, T2RulesKeys, T2Rules, T2Pseudos>,
  T3BreakpointKeys extends string,
  T3RulesKeys extends keyof StandardProperties,
  T3Rules extends Rules<T3RulesKeys>,
  T3Pseudos extends Pseudos<T3RulesKeys>,
  T3 extends CalicoTokens<T3BreakpointKeys, T3RulesKeys, T3Rules, T3Pseudos>,
  T4BreakpointKeys extends string,
  T4RulesKeys extends keyof StandardProperties,
  T4Rules extends Rules<T4RulesKeys>,
  T4Pseudos extends Pseudos<T4RulesKeys>,
  T4 extends CalicoTokens<T4BreakpointKeys, T4RulesKeys, T4Rules, T4Pseudos>
>(t1: T1, t2?: T2, t3?: T3, t4?: T4) {
  return mergeWith(t1, t2, t3, t3, t4, (value) =>
    Array.isArray(value) ? value : undefined,
  )
}
