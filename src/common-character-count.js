const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  if (!s1 || !s2) {
    throw new NotImplementedError('Not implemented');
  }
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  let commonCount = 0;

  for (const char of arr1) {
    const charIndex = arr2.indexOf(char);
    if (charIndex !== -1) {
       commonCount++;
      arr2.splice(charIndex, 1);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
