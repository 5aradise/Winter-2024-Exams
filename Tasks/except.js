// Copy all values from dict except listed

"use strict";

const except = (dict, ...exceptions) => {
  const keys = Object.keys(dict);
  for(const key of keys) {
    if(exceptions.includes(key)) {
      delete dict[key];
    }
  }
  return dict;
};

module.exports = except;
