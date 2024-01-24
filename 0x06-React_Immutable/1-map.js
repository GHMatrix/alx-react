const { Map } = require('immutable');

/**
 * Converts a plain JavaScript object to an Immutable Map using Map from Immutable.js.
 * @param {Object} object - The input object to convert.
 * @returns {Map} - An Immutable Map representation of the input object.
 */
function getImmutableObject(object) {
  return Map(object);
}

module.exports = { getImmutableObject };
