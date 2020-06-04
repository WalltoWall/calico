import { resolveGrid } from '../src'

test('converts measurement to rem', () => {
  expect(resolveGrid(0.25)(192)).toBe('48rem')
})
