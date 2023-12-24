const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  // Check if the function is not implemented
  if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
    throw new NotImplementedError('Not implemented');
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  const resultMatrix = [];

  // Helper function to count neighboring mines
  function countMines(row, col) {
    let count = 0;

    // Iterate through neighboring cells
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        // Check if the neighboring cell is within bounds
        if (i >= 0 && i < rows && j >= 0 && j < cols) {
          // Increment count if the neighboring cell has a mine
          if (matrix[i][j]) {
            count++;
          }
        }
      }
    }

    return count;
  }

  // Iterate through each cell in the matrix
  for (let row = 0; row < rows; row++) {
    const newRow = [];

    for (let col = 0; col < cols; col++) {
      // If the current cell has a mine, set the value to true
      if (matrix[row][col]) {
        newRow.push(1);
      } else {
        // If the current cell does not have a mine, count neighboring mines
        const minesCount = countMines(row, col);
        newRow.push(minesCount);
      }
    }

    resultMatrix.push(newRow);
  }

  return resultMatrix;
}

module.exports = {
  minesweeper
};


module.exports = {
  minesweeper
};
