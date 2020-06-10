import { Theme as CalicoTheme } from '../theme'

declare module 'treat/theme' {
  export interface Theme extends CalicoTheme {}
}
