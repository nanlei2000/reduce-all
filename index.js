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

module.exports = {
  map,
  filter,
  every,
  some,
}
