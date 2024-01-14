// Return an array without duplicates

'use strict';

const duplicate = (value, times) => {
  const result = [];
  for (let i = 0; i < times; i++) {
    result.push(value);
  }
  return result;
};

module.exports = duplicate;
