const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  if (!matrix || !Array.isArray(matrix)) {
    throw new NotImplementedError('Not implemented');
  }
  
  const catCount = matrix.reduce((count, row) => {
    return count + row.reduce((rowCount, element) => (element === '^^' ? rowCount + 1 : rowCount), 0);
  }, 0);

  return catCount;
}

module.exports = {
  countCats
};
