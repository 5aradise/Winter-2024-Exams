// Increment all numbers in dictionary

"use strict";

const incNumbers = (dict, ...rest_variables) => {
  const keys = Object.keys(dict);
  for (const key of keys) {
    if (typeof dict[key] === "number") {
      dict[key] = dict[key] + 1;
    }
  }
  return dict;
};

module.exports = incNumbers;
