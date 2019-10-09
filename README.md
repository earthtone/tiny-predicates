# Tiny Predicates

A collection of point-free predicate functions.

---

## Predicates

- `isNil`: check if value is `undefined` or `null`
- `isArray`: point-free implementation of `Array.isArray`
- `isInteger`: point-free implementation of `Number.isInteger`
- `isNumber`: check if value is a `Number` primitive
- `isObject`: check if value is `Object` primitive
- `isRegexp`: check if value is a regular expression
- `isString`: check if value is a `String` primitive
- `isFunction`: check if value is a `Function` (including async and generator functions)
- `isEmpty`: check if a value is "empty" (e.g. [], {}, '', etc)

## Usage

```js
import { isArray, isNumber, isFunction } from '@earthtone/tiny-predicates'

const string = 'this is a list of characters, but not actually an array'
const characters = ['f', 0, 0, 'b', 4, 'r']

function doSomething (list) {
  if (!isArray(list)) return list
  list.map(x => {
    if (!isNumber(x)) return x
    else x + 10
  })
}

console.log(doSomething(string)) // -> 'this is a list of characters, but not actually an array'
console.log(doSomething(characters).join('')) // -> 'f1010b14r'

function anyArgs (...args) {
  if (isFunction(args[0]) && isArray(args[1])) {
    return args[1].map(args[0])
  } else if (isFunction(args[1]) && isArray(args[0])) {
    return args[0].map(args[1])
  } else {
    throw new Error('I need an Array and a Callback!')
  }
}

console.log(anyArgs(x => x * 10, [1, 2, 3]) // -> [10, 20, 30]
console.log(anyArgs([2, 4, 6], x => x * 10) // -> [20, 40, 60]
console.log(anyArgs('foo', 100) // -> Error!
```

### Note

`isEmpty` leverages utility functions included in the [Ramda](https://ramdajs.com/) library, but unlike [Ramda's implementation](https://ramdajs.com/docs/#isEmpty), it does not support [Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray).
