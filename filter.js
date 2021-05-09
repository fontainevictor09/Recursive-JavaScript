/**
 *
 * @param {Array} arr array of elements
 * @param {Function} fn function that checks if the element satisfy the condition
 * @returns {Array} a new array with the elements that satisfy the condition
 */
 function filter(arr, condition) {
  if (arr.length === 0) return []
  const x = arr[0]
  const xs = arr.slice(1)
  return (condition(x) ? [x] : []).concat(filter(xs, condition))
}


const greaterThanTwo = (e) => e > 2

console.log(filter([1,2,3], greaterThanTwo))
console.log(filter([2], greaterThanTwo))
console.log(filter([], greaterThanTwo))
console.log(filter([-1, 2, 44], greaterThanTwo))

const isTrue = (e) => e
console.log(filter([true, true, false], isTrue))
