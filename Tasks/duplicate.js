// Return an array without duplicates

"use strict";

const duplicate = (value, times) => {
  if (times <= 0) return [];
  else {
    const result = [];
    for (let i = 0; i < times; i++) {
      result[i] = value;
    }
    return result;
  }
};

module.exports = duplicate;
