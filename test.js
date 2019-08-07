const {
  map,
  filter,
  every,
  some,
  find,
  findIndex,
  flatMap,
  mapFlat,
  reverse,
  join,
  indexOf,
} = require('./index')
const assert = require('assert')
const list = [1, 2, 3]
const nestedList = [1, [[[[[[[2]]]]]]], 3]
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
assert.deepStrictEqual(
  find(list, (item, index) => {
    return index === 1
  }),
  list.find((item, index) => {
    return index === 1
  })
)
assert.deepStrictEqual(
  findIndex(list, (item, index) => {
    return item === 2
  }),
  list.findIndex((item, index) => {
    return item === 2
  })
)
assert.deepStrictEqual(
  flatMap(list, (item, index) => {
    return [item * 2]
  }),
  [2, 4, 6]
)
assert.deepStrictEqual(
  mapFlat(nestedList, (item, index) => {
    return item * 2
  }),
  [2, 4, 6]
)
assert.deepStrictEqual(mapFlat(nestedList), list)
assert.deepStrictEqual(reverse(list), list.reverse())
assert.deepStrictEqual(reverse([]), [].reverse())
assert.deepStrictEqual(join([]), [].join())
assert.deepStrictEqual(join(list, '-'), list.join('-'))
assert.deepStrictEqual(indexOf(list, 2), list.indexOf(2))
assert.deepStrictEqual(indexOf(list, 0), list.indexOf(0))
