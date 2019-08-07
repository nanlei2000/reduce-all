// @ts-check
/**
 *  implement map use `Array.prototype.reduce`
 * @param {any[]} list
 * @param {Function} fn
 */
function map(list, fn) {
  return list.reduce((prev, cur, index, array) => {
    return [...prev, fn(cur, index, array)]
  }, [])
}
/**
 *  implement flatMap use `Array.prototype.reduce`
 * @description
 * map item => flat mapped result(depth = 1)
 * @param {any[]} list
 * @param {Function} fn
 */
function flatMap(list, fn) {
  return list.reduce((prev, cur, index, array) => {
    const result = fn(cur, index, array)
    return Array.isArray(result) ? prev.concat(result) : prev.concat([result])
  }, [])
}

/**
 * @param {any[]} list
 * @param {Function} fn
 * @description
 * flat to primitive(recursive) => map item
 */
function mapFlat(list, fn = (cur, index, array) => cur) {
  return list.reduce((prev, cur, index, array) => {
    return Array.isArray(cur)
      ? prev.concat(mapFlat(cur, fn))
      : prev.concat([fn(cur, index, array)])
  }, [])
}

/**
 *  implement filter use `Array.prototype.reduce`
 * @param {any[]} list
 * @param {Function} fn
 */
function filter(list, fn) {
  return list.reduce((prev, cur, index, array) => {
    return fn(cur, index, array) ? [...prev, cur] : prev
  }, [])
}
/**
 *  implement every use `Array.prototype.reduce`(without break)
 * @param {any[]} list
 * @param {Function} fn
 */
function every(list, fn) {
  return list.reduce((prev, cur, index, array) => {
    return prev && fn(cur, index, array)
  }, true)
}
/**
 *  implement some use `Array.prototype.reduce`(without break)
 * @param {any[]} list
 * @param {Function} fn
 */
function some(list, fn) {
  return list.reduce((prev, cur, index, array) => {
    return prev || fn(cur, index, array)
  }, false)
}

/**
 *  implement find use `Array.prototype.reduce`(without break)
 * @param {any[]} list
 * @param {Function} fn
 */
function find(list, fn) {
  return list.reduce((prev, cur, index, array) => {
    return fn(cur, index, array) ? cur : prev
  }, undefined)
}
/**
 *  implement findIndex use `Array.prototype.reduce`(without break)
 * @param {any[]} list
 * @param {Function} fn
 */
function findIndex(list, fn) {
  return list.reduce((prev, cur, index, array) => {
    return fn(cur, index, array) ? index : prev
  }, -1)
}

/**
 *  implement reverse use `Array.prototype.reduce`
 * @param {any[]} list
 * @returns {any[]}
 */
function reverse(list) {
  return list.reduce((prev, cur) => {
    return [cur, ...prev]
  }, [])
}
/**
 *  implement join use `Array.prototype.reduce`
 * @param {any[]} list
 * @returns {string}
 */
function join(list, separator = ',') {
  return list.reduce((prev, cur, index) => {
    return prev + (index === 0 ? '' : separator) + cur
  }, '')
}
/**
 *  implement indexOf use `Array.prototype.reduce`(without break)
 * @param {any[]} list
 * @param {any} searchElement
 * @returns {number}
 */
function indexOf(list, searchElement) {
  return list.reduce((prev, cur, index) => {
    return cur === searchElement ? index : prev
  }, -1)
}

module.exports = {
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
}
