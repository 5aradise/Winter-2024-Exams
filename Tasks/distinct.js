// Return an array without duplicates

"use strict";

const distinct = (data) => {
  const distinctSet = new Set(data);
  const distinctArr = [...distinctSet];
  return distinctArr;
};

module.exports = distinct;
