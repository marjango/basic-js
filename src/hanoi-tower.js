const { NotImplementedError } = require('../extensions/index.js');

function calculateHanoi(disksNumber, turnsSpeed) {
  // Check if the function is not implemented
  if (typeof disksNumber !== 'number' || typeof turnsSpeed !== 'number') {
    throw new NotImplementedError('Not implemented');
  }

  // Calculate the number of turns using the formula 2^n - 1
  const turns = Math.pow(2, disksNumber) - 1;

  // Calculate the time in seconds using the formula turns / (turnsSpeed / 3600)
  const seconds = Math.floor(turns / (turnsSpeed / 3600));

  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
