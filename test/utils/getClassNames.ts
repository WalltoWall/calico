import { Page } from 'puppeteer'

export const getClassNames = async (page: Page, selector: string) =>
  await page.evaluate(
    ({ selector }) => {
      const el = document.querySelector(selector)
      if (!el) return undefined

      return el.className
    },
    { selector },
  )
