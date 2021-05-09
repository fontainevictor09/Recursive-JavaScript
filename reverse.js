/**
 *
 * @param {Array} arr array of elements
 * @returns {Array} a new array with the elements in the inverse order
 */
 function reverse(arr) {
  if (arr.length === 0) return []
  const x = arr[0]
  const xs = arr.slice(1)
  return reverse(xs).concat([x])
}

console.log(reverse([1,2,3]))
console.log(reverse([]))
