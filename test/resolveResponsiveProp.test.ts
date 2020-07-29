import { resolveResponsiveProp } from '../src/utils'

const atoms = {
  mobile: {
    string: 'mobileString',
    1: 'mobileNumber',
  },
  tablet: {
    string: 'tabletString',
    1: 'tabletNumber',
  },
  desktop: {
    string: 'desktopString',
    1: 'desktopNumber',
  },
  desktopWide: {
    string: 'desktopWideString',
    1: 'desktopWideNumber',
  },
}

test('correctly resolves unresponsive values', () => {
  expect(resolveResponsiveProp('string', atoms)).toBe(atoms.mobile.string)
  expect(resolveResponsiveProp(1, atoms)).toBe(atoms.mobile[1])
})

test('correctly resolves responsive values', () => {
  expect(resolveResponsiveProp<string | number>([1, 'string'], atoms)).toBe(
    `${atoms.mobile[1]} ${atoms.tablet.string}`,
  )

  expect(resolveResponsiveProp<string | number>([1, 1, 1, 1], atoms)).toBe(
    `${atoms.mobile[1]} ${atoms.tablet[1]} ${atoms.desktop[1]} ${atoms.desktopWide[1]}`,
  )
})

test('handles null values', () => {
  expect(resolveResponsiveProp([null, 1], atoms)).toBe(atoms.tablet[1])

  expect(
    resolveResponsiveProp<string | number>([null, 1, 'string', 1], atoms),
  ).toBe(`${atoms.tablet[1]} ${atoms.desktop.string} ${atoms.desktopWide[1]}`)
})
