import { Theme as CalicoTheme } from '../src/theme'

declare module 'treat/theme' {
  export interface Theme extends CalicoTheme {}
}