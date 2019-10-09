import test from 'ava'
import { isNumber } from '../'

test('if value is an integer', assert => {
  assert.true(isNumber(1))
  assert.true(isNumber(1000000))
  assert.true(isNumber(0))
  assert.true(isNumber(0.5))

  assert.false(isNumber('0'))
  assert.false(isNumber([1, 2, 3]))
})
