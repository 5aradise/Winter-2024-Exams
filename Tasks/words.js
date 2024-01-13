// Count words in a string

"use strict";

const wordCount = (string) => {
  let wordCount = 0;
  let flag = false;
  for (const letter of string) {
    if (!flag) {
      if (letter === " ") {
        flag = false;
      } else {
        flag = true;
        wordCount++;
      }
    } else {
      if (letter === " ") {
        flag = false;
      } else {
        flag = true;
      }
    }
  }
  return wordCount;
};

module.exports = wordCount;
