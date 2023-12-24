const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }

  // Create a new array with non-negative values
  const nonNegativeValues = arr.filter((value) => value !== -1);

  // Sort the non-negative values array
  nonNegativeValues.sort((a, b) => a - b);

  // Replace non-negative values in the original array with the sorted values
  let nonNegativeIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = nonNegativeValues[nonNegativeIndex];
      nonNegativeIndex++;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight,
};
