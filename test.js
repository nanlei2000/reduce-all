const { map, filter, every, some } = require('./index')
const assert = require('assert')
const list = [1, 2, 3]
const stringList = ['1', '2', '3']
const listGreaterThanTwo = [3]
assert.deepStrictEqual(
  map(list, item => {
    return String(item)
  }),
  list.map(item => {
    return String(item)
  })
)
assert.deepStrictEqual(
  filter(list, item => {
    return item > 2
  }),
  list.filter(item => {
    return item > 2
  })
)
assert.deepStrictEqual(
  every(list, item => {
    return item > 0
  }),
  list.every(item => {
    return item > 0
  })
)
assert.deepStrictEqual(
  every(list, item => {
    return item > 1
  }),
  list.every(item => {
    return item > 1
  })
)
assert.deepStrictEqual(
  some(list, item => {
    return item > 1
  }),
  list.some(item => {
    return item > 1
  })
)
