import { createMq } from '../src'

test('allows for use of responsive arrays in treat files', () => {
  const breakpoints = ['48rem', '60rem', '72rem']
  const mq = createMq(breakpoints)

  const styleObj = mq({
    color: 'red',
    backgroundColor: ['green', 'red', 'blue'],

    ':hover': {
      textAlign: ['right', 'center'],
    },
  })

  expect(styleObj).toEqual({
    color: 'red',
    backgroundColor: 'green',

    ':hover': { textAlign: 'right' },
    '@media': {
      [`(min-width: ${breakpoints[0]})`]: {
        backgroundColor: 'red',
        ':hover': { textAlign: 'center' },
      },
      [`(min-width: ${breakpoints[1]})`]: {
        backgroundColor: 'blue',
      },
    },
  })
})
