const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    // Check if the function is not implemented
    if (!Array.isArray(arr)) {
      throw new NotImplementedError('Not implemented');
    }

    // Base case: If the array does not contain nested arrays, return 1
    if (!arr.some(Array.isArray)) {
      return 1;
    }

    // Recursive case: Calculate the depth for each nested array and return the maximum depth
    return 1 + Math.max(...arr.filter(Array.isArray).map(this.calculateDepth.bind(this)));
  }
}

module.exports = {
  DepthCalculator
};
