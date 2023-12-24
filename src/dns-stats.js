const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains) {
  // Check if the function is not implemented
  if (!Array.isArray(domains)) {
    throw new NotImplementedError('Not implemented');
  }

  const dnsStats = {};

  // Iterate through each domain
  for (const domain of domains) {
    // Split the domain into segments
    const segments = domain.split('.');

    // Build DNS hierarchy and count appearances
    let currentKey = '';
    for (let i = segments.length - 1; i >= 0; i--) {
      currentKey = `.${segments[i]}${currentKey}`;
      dnsStats[currentKey] = (dnsStats[currentKey] || 0) + 1;
    }
  }

  return dnsStats;
}

module.exports = {
  getDNSStats
};
