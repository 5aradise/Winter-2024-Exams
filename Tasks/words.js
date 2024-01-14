// Count words in a string

'use strict';

const wordCount = (string) => {
  if (string === '') return 0;
  const wordsList = string.split(' ');
  const wordCount = wordsList.length;
  return wordCount;
};

module.exports = wordCount;
