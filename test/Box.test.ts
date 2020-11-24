import { Page } from 'puppeteer'

import { startFixture, FixtureServer } from './utils/startFixture'
import { getStyles } from './utils/getStyles'
import { getClassNames } from './utils/getClassNames'

let server: FixtureServer

//@ts-ignore
// This is here due to type conflicts between
// @expect-puppeteer and puppeteers official types.
const castPage = page as Page

beforeAll(async () => {
  server = await startFixture({
    entry: require.resolve('./fixtures/App.tsx'),
  })
  await page.goto(server.url)
})

afterAll(() => {
  server.close()
})

test('background props', async () => {
  const selector = '#background'
  const styles = await getStyles(castPage, selector)
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "background-position-x": "left",
      "background-position-y": "top",
      "background-repeat": "repeat",
      "background-repeat-x": "repeat",
      "background-repeat-y": "repeat",
      "background-size": "cover",
      "display": "block",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(`"_2adQ7 _3-lg9 _5GGgs _1p5U_"`)
})

test('border props', async () => {
  const selector = '#border'
  const styles = await getStyles(castPage, selector)
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "border-bottom-color": "rgb(255, 255, 255)",
      "border-bottom-left-radius": "0px",
      "border-bottom-right-radius": "0px",
      "border-bottom-style": "solid",
      "border-bottom-width": "1px",
      "border-color": "#fff",
      "border-left-color": "rgb(255, 255, 255)",
      "border-left-style": "solid",
      "border-left-width": "1px",
      "border-radius": "0",
      "border-right-color": "rgb(255, 255, 255)",
      "border-right-style": "solid",
      "border-right-width": "1px",
      "border-style": "solid",
      "border-top-color": "rgb(255, 255, 255)",
      "border-top-left-radius": "0px",
      "border-top-right-radius": "0px",
      "border-top-style": "solid",
      "border-top-width": "1px",
      "border-width": "1px",
      "display": "block",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(`"VDA81 u7_Zg _1Ruid _19nER"`)
})

test('effect props', async () => {
  const selector = '#effect'
  const styles = await getStyles(castPage, selector)
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "display": "block",
      "opacity": ".25",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(`"nnl6c"`)
})

test('flexbox props', async () => {
  const selector = '#flexbox'
  const styles = await getStyles(castPage, selector)
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "align-content": "flex-start",
      "align-items": "center",
      "align-self": "flex-end",
      "display": "block",
      "flex-basis": "auto",
      "flex-direction": "row",
      "flex-grow": "0",
      "flex-shrink": "0",
      "flex-wrap": "nowrap",
      "justify-content": "flex-start",
      "justify-items": "center",
      "justify-self": "flex-end",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(
    `"_3OhwE _3Hm2K _1hmCU _3yoCY _1Cza- Xf_iD _1nzvY _3wFyH _1nAdt mepj2 _2Uzy6"`,
  )
})

test('grid props', async () => {
  const selector = '#grid'
  const styles = await getStyles(castPage, selector)
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "column-gap": "0.25rem",
      "display": "block",
      "gap": ".25rem",
      "grid-auto-flow": "row",
      "grid-column": "auto",
      "grid-column-end": "auto",
      "grid-column-start": "auto",
      "grid-row": "auto",
      "grid-row-end": "auto",
      "grid-row-start": "auto",
      "grid-template-columns": "repeat(1,minmax(0,1fr))",
      "grid-template-rows": "repeat(1,minmax(0,1fr))",
      "row-gap": "0.25rem",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(
    `"_1qeOP _2ypSJ _1syVb SMBS- _2_Jac _1gL7F"`,
  )
})

test('interactivity props', async () => {
  const selector = '#interactivity'
  const styles = await getStyles(castPage, selector)
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "-webkit-user-select": "none",
      "display": "block",
      "outline": "none",
      "outline-color": "initial",
      "outline-style": "none",
      "outline-width": "initial",
      "pointer-events": "none",
      "user-select": "none",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(`"_2Dk0s _3nO81 q-2xG"`)
})

test('layout props', async () => {
  const selector = '#layout'
  const styles = await getStyles(castPage, selector)
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "bottom": "0",
      "display": "flex",
      "left": "0",
      "overflow": "hidden",
      "overflow-x": "hidden",
      "overflow-y": "hidden",
      "position": "relative",
      "right": "0",
      "top": "0",
      "z-index": "2",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(
    `"_2b7Gy _3KvGA _3dKb5 _1Wqgl _1N3A1 RU35K _3xC7O RhIrs"`,
  )
})

test('sizing props', async () => {
  const selector = '#sizing'
  const styles = await getStyles(castPage, selector)
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "display": "block",
      "height": "100%",
      "max-width": "48rem",
      "width": "auto",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(`"_2DtBX _2DhJ7 YuNdC"`)
})

test('space props', async () => {
  const selector = '#space'
  const styles = await getStyles(castPage, selector)
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "display": "block",
      "margin": ".25rem",
      "margin-bottom": "0.25rem",
      "margin-left": "0.25rem",
      "margin-right": "0.25rem",
      "margin-top": "0.25rem",
      "padding": ".25rem",
      "padding-bottom": "0.25rem",
      "padding-left": "0.25rem",
      "padding-right": "0.25rem",
      "padding-top": "0.25rem",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(`"_1ziWV _1W0JL"`)
})

test('transition props', async () => {
  const selector = '#transition'
  const styles = await getStyles(castPage, selector)
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "display": "block",
      "transition-duration": ".2s",
      "transition-timing-function": "cubic-bezier(.4,0,1,1)",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(`"_3h5l_ _4jgK9"`)
})

test('typography props', async () => {
  const selector = '#typography'
  const styles = await getStyles(castPage, selector)
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "color": "#fff",
      "display": "block",
      "font-style": "italic",
      "font-weight": "200",
      "letter-spacing": "normal",
      "line-height": "1",
      "text-align": "center",
      "text-transform": "uppercase",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(
    `"_1519q _3lA3f _3dLfT wtkcE _11sFr _2qZyn _3jnoa"`,
  )
})

test('hover prop', async () => {
  const selector = '#hover'
  const styles = await getStyles(castPage, selector, 'hover')
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "color": "#fff",
      "display": "block",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(`"_3jfLK"`)
})

test('focus prop', async () => {
  const selector = '#hover'
  const styles = await getStyles(castPage, selector, 'focus')
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "color": "#fff",
      "display": "block",
      "outline-color": "-webkit-focus-ring-color",
      "outline-style": "auto",
      "outline-width": "1px",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(`"_3jfLK"`)
})

test('responsive styles', async () => {
  const selector = '#responsive'
  const styles = await getStyles(castPage, selector)
  const classNames = await getClassNames(castPage, selector)

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "color": "#000",
      "display": "block",
    }
  `)

  expect(classNames).toMatchInlineSnapshot(`"_2pwSt AhJjn"`)
})

test('polymorphic component', async () => {
  const dataFooVal = await page.evaluate(() => {
    const el = document.querySelector('#polymorphic')
    return el?.getAttribute?.('data-foo')
  })

  expect(dataFooVal).toBe('bar')
})

test('polymorphic component with component prop', async () => {
  const dataFooVal = await page.evaluate(() => {
    const el = document.querySelector('#polymorphic-component-prop')
    return el?.getAttribute?.('data-foo')
  })

  expect(dataFooVal).toBe('bar')
})
