import test from 'ava'
import { isObject } from '../'

test('is value an `Object` primitive', assert => {
  assert.false(isObject('foo'))
  assert.false(isObject(0))
  assert.false(isObject([1, 2, 3]))
  assert.false(isObject(function () {}))

  assert.true(isObject({ foo: 'bar' }))
  assert.true(isObject({}))
})
