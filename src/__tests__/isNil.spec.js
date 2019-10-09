import test from 'ava'
import { isNil } from '../'

test('tests a value for `null` or `undefined`', assert => {
  assert.true(isNil(undefined))
  assert.true(isNil(null))
  assert.false(isNil([]))
  assert.false(isNil({}))
  assert.false(isNil(0))
  assert.false(isNil(''))
})
