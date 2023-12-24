const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(inputString) {
  // Check if the function is not implemented
  if (typeof inputString !== 'string') {
    throw new NotImplementedError('Not implemented');
  }

  // Define the regular expression pattern for MAC-48 address
  const macPattern = /^([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}$/;

  // Test if the input string matches the pattern
  return macPattern.test(inputString);
}

module.exports = {
  isMAC48Address
};

