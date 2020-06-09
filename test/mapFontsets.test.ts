import util from 'util'
import { mapFontsets } from '../src'
import { theme } from './fixtures/theme'

test('mapFontsets', () => {
  const mappedSet = mapFontsets(theme, {
    sans1: {
      //@ts-ignore
      fontFamily: 'sans',
      fontSize: {
        mobile: 1,
        tablet: 1.25,
      },
      lineHeightScale: 1.4,
    },
  })

  console.log(util.inspect(mappedSet, false, null, true))
})
