// Increment all numbers in dictionary

'use strict';

const incNumbers = (dict) => {
  const incDict = { ...dict };
  const keys = Object.keys(dict);
  for (const key of keys) {
    if (typeof dict[key] === 'number') {
      incDict[key] = dict[key] + 1;
    }
  }
  return incDict;
};

module.exports = incNumbers;
