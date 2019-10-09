import test from 'ava'
import { isEmpty } from '../'

test('returns false for null', assert => {
  assert.false(isEmpty(null))
})

test('returns false for undefined', assert => {
  assert.false(isEmpty(undefined))
})

test('returns true for empty string', assert => {
  assert.true(isEmpty(''))
  assert.false(isEmpty(' '))
})

test('returns true for empty array', assert => {
  assert.true(isEmpty([]))
  assert.false(isEmpty([[]]))
})

test('returns true for empty object', assert => {
  assert.true(isEmpty({}))
  assert.false(isEmpty({ x: 0 }))
})

test('returns true for empty arguments object', assert => {
  assert.true(isEmpty((function () { return arguments })()))
  assert.false(isEmpty((function () { return arguments })(0)))
})

test('returns false for every other value', assert => {
  assert.false(isEmpty(0))
  assert.false(isEmpty(NaN))
  assert.false(isEmpty(['']))
})
