/**
 *
 * @param {Array} arr array multi level
 * @returns {Array} a new array with the elements in the same level
 */
function flatten(arr) {
  if (arr.length === 0) return []
  const x = arr[0]
  const xs = arr.slice(1)
  if (arr.length === 1) return Array.isArray(x) ? flatten(x) : [x]
  return flatten([x]).concat(flatten(xs))
}

console.log(flatten([]))
console.log(flatten([1]))
console.log(flatten([1,2]))
console.log(flatten([1,2,3]))
console.log(flatten([1,2, [3, 4, [[[5], 6], 7]]]))
