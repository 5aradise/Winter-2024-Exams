// Sum all number values in dict

"use strict";

const sum = (obj) => {
  let sum = 0;
  const values = Object.values(obj);
  for (const value of values) {
    if (typeof value === "number") sum += value;
  }
  return sum;
};

module.exports = sum;
