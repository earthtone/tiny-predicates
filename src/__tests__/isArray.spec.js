import test from 'ava'
import { isArray } from '../'

test('tests if a value is an `Array`', assert => {
  assert.true(isArray([1, 2, 3]))
  assert.true(isArray([]))

  assert.false(isArray({ foo: 'bar' }))
  assert.false(isArray('ornette'))
  assert.false(isArray(52))
  assert.false(isArray(undefined))
})
