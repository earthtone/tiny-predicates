import test from 'ava'
import { isInteger } from '../'

test('if value is an integer', assert => {
  assert.true(isInteger(1))
  assert.true(isInteger(1000000))
  assert.true(isInteger(0))

  assert.false(isInteger('0'))
  assert.false(isInteger([1, 2, 3]))
  assert.false(isInteger(0.5))
})
