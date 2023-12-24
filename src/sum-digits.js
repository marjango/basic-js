const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one-digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 */
function getSumOfDigits(n) {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new Error('Invalid input. Please provide a valid number.');
  }

  // Convert the number to a string to iterate over its digits
  let numStr = n.toString();

  // Sum the digits until we get a single-digit number
  while (numStr.length > 1) {
    let digitSum = 0;
    for (let i = 0; i < numStr.length; i++) {
      digitSum += parseInt(numStr[i]);
    }
    numStr = digitSum.toString();
  }

  return parseInt(numStr);
}

module.exports = {
  getSumOfDigits,
};
