const { NotImplementedError } = require('../extensions/index.js');

function renameFiles(names) {
  // Check if the function is not implemented
  if (!Array.isArray(names)) {
    throw new NotImplementedError('Not implemented');
  }

  const occurrences = {};

  // Iterate through each name in the input array
  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    // Check if the name has occurred before
    if (occurrences[name] === undefined) {
      occurrences[name] = 1;
    } else {
      // Append a suffix to make the name unique
      const newName = `${name}(${occurrences[name]})`;
      occurrences[name]++;
      names[i] = newName;

      // Update occurrences for the new name
      occurrences[newName] = 1;
    }
  }

  return names;
}

module.exports = {
  renameFiles
};
