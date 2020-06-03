import { startFixture, FixtureServer } from './utils/startFixture'

let server: FixtureServer

beforeAll(async () => {
  server = await startFixture({
    entry: require.resolve('./fixture.tsx'),
  })
  await page.goto(server.url)
})

afterAll(() => {
  server.close()
})
