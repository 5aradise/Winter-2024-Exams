// Find an intersection of two dictionaries

"use strict";

const intersection = (obj1, obj2) => {
  const intersec = {};
  const obj1_Keys = Object.keys(obj1);
  for (const obj1_Key of obj1_Keys) {
    if (obj1[obj1_Key] === obj2[obj1_Key]) {
      intersec[obj1_Key] = obj1[obj1_Key];
    }
  }
  return intersec;
};

module.exports = intersection;
