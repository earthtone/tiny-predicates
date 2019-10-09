import test from 'ava'
import { isRegexp } from '../'

test('is value a `String` primitive', assert => {
  assert.false(isRegexp('foo'))
  assert.false(isRegexp(''))
  assert.false(isRegexp(['e', 'n', 'o'].join('')))

  assert.false(isRegexp(0))
  assert.false(isRegexp(['r', 'o', 'x', 'y']))
  assert.false(isRegexp({ foo: 'bar' }))

  assert.true(isRegexp(/\.js$/))
  assert.true(isRegexp(new RegExp('foo bar baz')))
})
