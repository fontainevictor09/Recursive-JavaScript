/**
 *
 * @param {Array} arr array of elements
 * @param {Function} fn function to be applied to each element
 * @returns {Array} a new array with the function applied to each elements
 */
function map(arr, fn) {
  if (arr.length === 0) return []
  const x = arr[0]
  const xs = arr.slice(1)
  return [fn(x)].concat(map(xs, fn))
}


const plusOne = (e) => e + 1
console.log(map([1,2,3], plusOne))
console.log(map([2], plusOne))
console.log(map([], plusOne))

const getName = (e) => e.name
const objs = [
  {name: 'Ale', age: 27},
  {name: 'Juan', age: 27},
  {name: 'Maria', age: 27},
]
console.log(map(objs, getName))
