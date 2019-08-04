/**
 *  implement map user `Array.prototype.reduce`
 * @param {any[]} list
 * @param {Function} fn
 */
function map(list, fn) {
  return list.reduce((prev, cur, index, array) => {
    return [...prev, fn(cur, index, array)]
  }, [])
}
/**
 *  implement filter user `Array.prototype.reduce`
 * @param {any[]} list
 * @param {Function} fn
 */
function filter(list, fn) {
  return list.reduce((prev, cur, index, array) => {
    return fn(cur, index, array) ? [...prev, cur] : prev
  }, [])
}

module.exports = {
  map,
  filter,
}
