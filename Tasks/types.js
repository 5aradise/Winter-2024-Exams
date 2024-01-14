// Count types in an array

'use strict';

const types = (array) => {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const value of array) {
    const type = typeof value;
    types[type]++;
  }
  return types;
};

module.exports = types;
