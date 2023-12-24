const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain(email) {
  // Check if the function is not implemented
  if (typeof email !== 'string') {
    throw new NotImplementedError('Not implemented');
  }

  // Use regular expression to match the domain part of the email
  const domainMatch = email.match(/@([^.]+(\.[^.]+)*)$/);

  // Check if a match is found
  if (domainMatch) {
    return domainMatch[1];
  }

  return null; // or throw an error, depending on your requirements
}

module.exports = {
  getEmailDomain
};
