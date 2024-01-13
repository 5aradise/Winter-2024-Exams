// Find an intersection of two dictionaries

"use strict";

const intersection = (obj1, obj2) => {
  const intersec = {};
  const obj1Keys = Object.keys(obj1);
  for (const obj1Key of obj1Keys) {
    if (obj1[obj1Key] === obj2[obj1Key]) {
      intersec[obj1Key] = obj1[obj1Key];
    }
  }
  return intersec;
};

module.exports = intersection;
