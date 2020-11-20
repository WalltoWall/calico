import { resolveResponsiveProp } from '../src'

const atoms = [
  {
    string: 'mobileString',
    1: 'mobileNumber',
  },
  {
    string: 'tabletString',
    1: 'tabletNumber',
  },
  {
    string: 'desktopString',
    1: 'desktopNumber',
  },
  {
    string: 'desktopWideString',
    1: 'desktopWideNumber',
  },
]

test('correctly resolves unresponsive values', () => {
  expect(resolveResponsiveProp('string', atoms)).toBe(atoms[0].string)
  expect(resolveResponsiveProp(1, atoms)).toBe(atoms[0][1])
})

test('correctly resolves responsive values', () => {
  expect(resolveResponsiveProp<string | number>([1, 'string'], atoms)).toBe(
    `${atoms[0][1]} ${atoms[1].string}`,
  )

  expect(resolveResponsiveProp<string | number>([1, 1, 1, 1], atoms)).toBe(
    `${atoms[0][1]} ${atoms[1][1]} ${atoms[2][1]} ${atoms[3][1]}`,
  )
})

test('handles null values', () => {
  expect(resolveResponsiveProp([null, 1], atoms)).toBe(atoms[1][1])

  expect(
    resolveResponsiveProp<string | number>([null, 1, 'string', 1], atoms),
  ).toBe(`${atoms[1][1]} ${atoms[2].string} ${atoms[3][1]}`)
})
