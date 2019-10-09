import test from 'ava'
import { isString } from '../'

test('is value a `String` primitive', assert => {
  assert.true(isString('foo'))
  assert.true(isString(''))
  assert.true(isString(['e', 'n', 'o'].join('')))

  assert.false(isString(0))
  assert.false(isString(['r', 'o', 'x', 'y']))
  assert.false(isString({ foo: 'bar' }))
  assert.false(isString(/\.js$/))
  assert.false(isString(new RegExp('apollo')))
})
