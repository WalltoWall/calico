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

  let theTempValue = ''
  page.on('pageerror', function (err) {
    theTempValue = err.toString()
    console.log('Page error: ' + theTempValue)
  })
  page.on('error', function (err) {
    theTempValue = err.toString()
    console.log('Error: ' + theTempValue)
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

  expect(classNames).toMatchInlineSnapshot(`"qR34W _2M4Z6 _3RiK0 _1AKKL"`)
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

  expect(classNames).toMatchInlineSnapshot(`"uN4ul _3eLv4 _6I3Bp nPEFE"`)
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

  expect(classNames).toMatchInlineSnapshot(`"_2vlWS"`)
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
    `"_1KE92 _3Hm2K _3XIn5 _1MfY8 PHH_i yDs16 _3KhUU _2UkMk _2Uzy6 _3Ray2 _2vCWx"`,
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
    `"_25kG7 b3vNs _2zzdF _26Eyg iyG7c hqQkj"`,
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

  expect(classNames).toMatchInlineSnapshot(`"_3px1P _2sYHh _3Wm_U"`)
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
    `"_1tLHM _2dgJI _28XMX _1939a Khhn_ _1haMH NlMSR _2OZra"`,
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

  expect(classNames).toMatchInlineSnapshot(`"_2_UAO _1xfo- _27UkU"`)
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

  expect(classNames).toMatchInlineSnapshot(`"_4AyaT _1Orit"`)
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

  expect(classNames).toMatchInlineSnapshot(`"ssIJ9 _2i-Pa"`)
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
    `"jY0Ru _2yxws vpOjF _2aI4r _2Ck7c _1h6z2 _22G2M"`,
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

  expect(classNames).toMatchInlineSnapshot(`"MSiKD"`)
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

  expect(classNames).toMatchInlineSnapshot(`"MSiKD"`)
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

  expect(classNames).toMatchInlineSnapshot(`"jCa00 _2EJV3"`)
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

test('polymorphic element type', async () => {
  // We are just checking that the `as` prop maps to an appropriate underlying
  // HTML element in the type system. We do this by rendering a `<Box>` as an
  // `input` and adding an `onChange` prop. The prop's function should be typed
  // with a React.FormEvent<HTMLInputElement> event containing a `value`
  // property.
  //
  // @see ./fixtures/App.tsx with <Box id="polymorphic-element-type" />
  expect(true).toBe(true)
})

test('polymorphic element type with component', async () => {
  // We are just checking that the `as` prop maps to an appropriate underlying
  // HTML element in the type system. We do this by rendering a `<Box>` as a
  // `Box` and adding an `onChange` prop. The prop's function should be typed
  // with a React.FormEvent<Element> event *not* containing a `value` property.
  // We check this with a `// @ts-expect-error` comment.
  //
  // @see ./fixtures/App.tsx with <Box id="polymorphic-element-type-with-component" />
  expect(true).toBe(true)
})
