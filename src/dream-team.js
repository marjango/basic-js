const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    throw new NotImplementedError('Not implemented');
  }

  const initials = members
    .filter(member => typeof member === 'string')
    .map(member => member.trim()[0].toUpperCase());

  if (initials.length === 0) {
    return false;
  }

  const dreamTeamName = initials.sort().join('');

  return dreamTeamName;
}

module.exports = {
  createDreamTeam
};
