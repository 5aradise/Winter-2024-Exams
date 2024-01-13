// Return an array without duplicates

"use strict";

const distinct = (data) => {
  const distinctSet = new Set();
  let w = 0;
  data.forEach((a) => {
    if (distinctSet.has(a)) {
      delete data[w];
    } else {
      distinctSet.add(a);
    }
    w++;
  });
  return data.filter((x) => typeof x === "number");
};

module.exports = distinct;
