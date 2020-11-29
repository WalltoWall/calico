import { Page } from 'puppeteer'

export const getClassNames = async (page: Page, selector: string) =>
  await page.$eval(selector, (el) => el.className)
