const { map, filter } = require('./index').default
const assert = require('assert')
const list = [1, 2, 3]
const stringList = ['1', '2', '3']
const listGreaterThanTwo = [3]
assert.deepStrictEqual(
  map(list, item => {
    return String(item)
  }),
  stringList
)
assert.deepStrictEqual(
  filter(list, item => {
    return item > 2
  }),
  listGreaterThanTwo
)
