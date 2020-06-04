import { startFixture, FixtureServer } from './utils/startFixture'
import { getStyles } from './utils/getStyles'

let server: FixtureServer

describe('Help', () => {
  beforeAll(async () => {
    server = await startFixture({
      entry: require.resolve('./fixtures/App.tsx'),
    })
    await page.goto(server.url)
  })

  test('it should apply styles correctly', async () => {
    const styles = await getStyles(page, '#main')

    console.log(styles)
  })

  afterAll(() => {
    server.close()
  })
})
