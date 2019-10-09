import empty from 'ramda/src/empty'
import equals from 'ramda/src/equals'
const toString = x => Object.prototype.toString.call(x)

/**
 * Check if value is undefined or null
 *
 * @param {*} x
 * @return {Boolean}
 * */
export const isNil = x => x === null || x === undefined
/**
 * Check if value is an Array
 *
 * @param {*} x
 * @return {Boolean}
 * */
export const isArray = Array.isArray
/**
 * Check if value is an integer
 *
 * @param {*} x
 * @return {Boolean}
 * */
export const isInteger = Number.isInteger
/**
 * Check if value is Number
 *
 * @param {*} x
 * @return {Boolean}
 * */
export const isNumber = x => toString(x) === '[object Number]'
/**
 * Check if value is an object literal
 *
 * @param {*} x
 * @return {Boolean}
 * */
export const isObject = x => toString(x) === '[object Object]'
/**
 * Check if value is a regular expression
 *
 * @param {*} x
 * @return {Boolean}
 * */
export const isRegexp = x => toString(x) === '[object RegExp]'
/**
 * Check if value is a string
 *
 * @param {*} x
 * @return {Boolean}
 * */
export const isString = x => toString(x) === '[object String]'
/**
 * Check if value is a Function
 *
 * @param {*} x
 * @return {Boolean}
 * */
export const isFunction = x => {
  const type = toString(x)
  return type === '[object Function]' ||
    type === '[object AsyncFunction]' ||
    type === '[object GeneratorFunction]' ||
    type === '[object AsyncGeneratorFunction]'
}

/**
 * Check if value is empty
 * @param {*} x
 * @return {Boolean}
 * */

export const isEmpty = x =>
  !isNil(x) && equals(x, empty(x))
