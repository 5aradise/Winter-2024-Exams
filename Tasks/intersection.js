// Find an intersection of two dictionaries

"use strict";

const intersection = (obj1, obj2) => {
  const obj1_Keys = Object.keys(obj1);
  for (const obj1_Key of obj1_Keys) {
    if (obj1[obj1_Key] === obj2[obj1_Key]) {
      obj2[obj1_Key] = obj1[obj1_Key];
    } else {
      delete obj1[obj1_Key];
    }
  }
  return obj1;
};

module.exports = intersection;
