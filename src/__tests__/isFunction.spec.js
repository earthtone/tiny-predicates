import test from 'ava'
import { isFunction } from '../'

test('is value a `function`', assert => {
  assert.false(isFunction({ foo: 'bar' }))
  assert.false(isFunction([1, 2, 3]))
  assert.false(isFunction(function () { return 'foo' }()))

  assert.true(isFunction(function () {}))
  assert.true(isFunction(function * () {}))
  assert.true(isFunction(async function () {}))
  assert.true(isFunction(async function * () {}))
})
