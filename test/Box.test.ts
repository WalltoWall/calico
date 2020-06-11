import { startFixture, FixtureServer } from './utils/startFixture'
import { getStyles } from './utils/getStyles'

let server: FixtureServer

beforeAll(async () => {
  server = await startFixture({
    entry: require.resolve('./fixtures/App.tsx'),
  })
  await page.goto(server.url)
})

test('background props', async () => {
  const styles = await getStyles(page, '#background')

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
})

test('border props', async () => {
  const styles = await getStyles(page, '#border')

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
})

test('effect props', async () => {
  const styles = await getStyles(page, '#effect')

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "display": "block",
      "opacity": ".25",
    }
  `)
})

test('flexbox props', async () => {
  const styles = await getStyles(page, '#flexbox')

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
})

test('grid props', async () => {
  const styles = await getStyles(page, '#grid')

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
})

test('interactivity props', async () => {
  const styles = await getStyles(page, '#interactivity')

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
})

test('layout props', async () => {
  const styles = await getStyles(page, '#layout')

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
})

test('sizing props', async () => {
  const styles = await getStyles(page, '#sizing')

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "display": "block",
      "height": "100%",
      "max-width": "48rem",
      "width": "auto",
    }
  `)
})

test('space props', async () => {
  const styles = await getStyles(page, '#space')

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
})

test('transition props', async () => {
  const styles = await getStyles(page, '#transition')

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "display": "block",
      "transition-duration": ".2s",
      "transition-timing-function": "cubic-bezier(.4,0,1,1)",
    }
  `)
})

test('typography props', async () => {
  const styles = await getStyles(page, '#typography')

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
})

test('hover prop', async () => {
  const styles = await getStyles(page, '#hover', 'hover')

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "color": "#fff",
      "display": "block",
    }
  `)
})

test('focus prop', async () => {
  const styles = await getStyles(page, '#focus', 'focus')

  expect(styles).toMatchInlineSnapshot(`
    Object {
      "color": "#fff",
      "display": "block",
      "outline-color": "-webkit-focus-ring-color",
      "outline-style": "auto",
      "outline-width": "1px",
    }
  `)
})

afterAll(() => {
  server.close()
})
