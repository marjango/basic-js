const { NotImplementedError } = require('../extensions/index.js');

function getMatrixElementsSum(matrix) {
  // Check if the function is not implemented
  if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
    throw new NotImplementedError('Not implemented');
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  let sum = 0;

  // Iterate through each column
  for (let col = 0; col < cols; col++) {
    // Iterate through each row
    for (let row = 0; row < rows; row++) {
      // If a "0" is encountered, stop adding values below it
      if (matrix[row][col] === 0) {
        break;
      }

      // Add the value to the sum
      sum += matrix[row][col];
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
