const { fromJS } = require('immutable');

/**
 * Converts a plain JavaScript object to an Immutable Map using fromJS.
 * @param {Object} object - The input object to convert.
 * @returns {Map} - An Immutable Map representation of the input object.
 */
function getImmutableObject(object) {
  return fromJS(object);
}

module.exports = getImmutableObject;
