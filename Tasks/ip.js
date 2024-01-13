// Split string by the first occurrence of separator

"use strict";

const parseIp = (ip) => {
  const ipNums = [];
  if (ip === "") return;
  else {
    const ipNumStrs = ip.split(".");
    if (ipNumStrs.length !== 4) return;
    let i = 0;
    for (const ipNumStr of ipNumStrs) {
      ipNums[i] = parseInt(ipNumStr);
      if (isNaN(ipNums[i])) return;
      i++;
    }
  }
  return ipNums;
};

module.exports = parseIp;
