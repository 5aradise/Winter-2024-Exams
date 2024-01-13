// Copy all values from dict except listed

"use strict";

const except = (dict, ...exceptions) => {
  const copyDict = {};
  const keys = Object.keys(dict);
  for (const key of keys) {
    if (!exceptions.includes(key)) {
      copyDict[key] = dict[key];
    }
  }
  return copyDict;
};

module.exports = except;
