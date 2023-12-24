const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  if (typeof n !== 'number') {
    throw new NotImplementedError('Not implemented');
  }

  const numStr = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < numStr.length; i++) {
    const modifiedNumber = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));
    maxNumber = Math.max(maxNumber, modifiedNumber);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
