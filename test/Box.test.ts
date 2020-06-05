import { startFixture, FixtureServer } from './utils/startFixture'
import { getStyles } from './utils/getStyles'

let server: FixtureServer
const defaultBoxStyles = { display: 'block' }

beforeAll(async () => {
  server = await startFixture({
    entry: require.resolve('./fixtures/App.tsx'),
  })
  await page.goto(server.url)
})

test('useBackgroundStyles', async () => {
  const styles = await getStyles(page, '#background')

  expect(styles).toEqual({
    ...defaultBoxStyles,
    'background-size': 'cover',
    'background-position-x': 'left',
    'background-position-y': 'top',
    'background-repeat': 'repeat',
    'background-repeat-x': 'repeat',
    'background-repeat-y': 'repeat',
  })
})

test('useBorderStyles', async () => {
  const styles = await getStyles(page, '#border')

  expect(styles).toEqual({
    ...defaultBoxStyles,
    'border-color': '#fff',
    'border-top-color': 'rgb(255, 255, 255)',
    'border-right-color': 'rgb(255, 255, 255)',
    'border-bottom-color': 'rgb(255, 255, 255)',
    'border-left-color': 'rgb(255, 255, 255)',
    'border-top-width': '1px',
    'border-bottom-width': '1px',
    'border-left-width': '1px',
    'border-right-width': '1px',
    'border-style': 'solid',
    'border-top-style': 'solid',
    'border-right-style': 'solid',
    'border-bottom-style': 'solid',
    'border-left-style': 'solid',
    'border-radius': '0',
    'border-top-left-radius': '0px',
    'border-top-right-radius': '0px',
    'border-bottom-right-radius': '0px',
    'border-bottom-left-radius': '0px',
  })
})

test.only('useEffectStyles', async () => {
  const styles = await getStyles(page, '#effect')

  expect(styles).toEqual({
    ...defaultBoxStyles,
    opacity: '.25',
  })
})

test('useFlexboxStyles', async () => {
  const styles = await getStyles(page, '#flexbox')

  expect(styles).toEqual({
    ...defaultBoxStyles,
    'align-content': 'flex-start',
    'align-items': 'center',
    'align-self': 'flex-end',
    'flex-basis': 'auto',
    'flex-direction': 'row',
    'flex-grow': '0',
    'flex-shrink': '0',
    'flex-wrap': 'nowrap',
    'justify-content': 'flex-start',
    'justify-items': 'center',
    'justify-self': 'flex-end',
  })
})

test('useGridStyles', async () => {
  const styles = await getStyles(page, '#grid')

  expect(styles).toEqual({
    ...defaultBoxStyles,
    gap: '.25rem',
    'row-gap': '0.25rem',
    'column-gap': '0.25rem',
    'grid-auto-flow': 'row',
    'grid-template-columns': 'repeat(1,minmax(0,1fr))',
    'grid-template-rows': 'repeat(1,minmax(0,1fr))',
    'grid-column': 'auto',
    'grid-column-start': 'auto',
    'grid-column-end': 'auto',
    'grid-row': 'auto',
    'grid-row-start': 'auto',
    'grid-row-end': 'auto',
  })
})

test('useInteractivityStyles', async () => {
  const styles = await getStyles(page, '#interactivity')

  expect(styles).toEqual({
    ...defaultBoxStyles,
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    '-webkit-user-select': 'none',
    outline: 'none',
    'outline-color': 'initial',
    'outline-style': 'none',
    'outline-width': 'initial',
    'pointer-events': 'none',
    'user-select': 'none',
  })
})

test('useLayoutStyles', async () => {
  const styles = await getStyles(page, '#layout')

  expect(styles).toEqual({
    display: 'flex',
    bottom: '0',
    left: '0',
    right: '0',
    top: '0',
    position: 'relative',
    overflow: 'hidden',
    'overflow-x': 'hidden',
    'overflow-y': 'hidden',
    'z-index': '2',
  })
})

test('useSizingStyles', async () => {
  const styles = await getStyles(page, '#sizing')

  expect(styles).toEqual({
    ...defaultBoxStyles,
    width: 'auto',
    height: '100%',
    'max-width': '48rem',
  })
})

test('useSpaceStyles', async () => {
  const styles = await getStyles(page, '#space')

  expect(styles).toEqual({
    ...defaultBoxStyles,
    'margin-bottom': '.25rem',
    'margin-left': '.25rem',
    'margin-right': '.25rem',
    'margin-top': '.25rem',
    'padding-bottom': '.25rem',
    'padding-left': '.25rem',
    'padding-right': '.25rem',
    'padding-top': '.25rem',
  })
})

test('useTransitionStyles', async () => {
  const styles = await getStyles(page, '#transition')

  expect(styles).toEqual({
    ...defaultBoxStyles,
    'transition-duration': '.2s',
    'transition-timing-function': 'cubic-bezier(.4,0,1,1)',
  })
})

test('useTypographyStyles', async () => {
  const styles = await getStyles(page, '#typography')

  expect(styles).toEqual({
    ...defaultBoxStyles,
    'font-style': 'italic',
    'font-weight': '200',
    'letter-spacing': 'normal',
    'line-height': '1',
    'text-align': 'center',
    'text-transform': 'uppercase',
  })
})

afterAll(() => {
  server.close()
})
