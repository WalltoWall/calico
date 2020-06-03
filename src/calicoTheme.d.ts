import { CalicoTheme } from './createCalicoTheme'

declare module 'treat/theme' {
  export interface Theme extends CalicoTheme {}
}
