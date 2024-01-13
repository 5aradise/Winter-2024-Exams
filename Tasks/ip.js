// Split string by the first occurrence of separator

"use strict";

const parseIp = (ip) => {
  const ipNums = [];
  const ipNumStrs = ip.split(".");
  if (ipNumStrs.length !== 4) return;
  for (const ipNumStr of ipNumStrs) {
    ipNums.push(parseInt(ipNumStr));
    if (isNaN(ipNums[ipNums.length-1])) return;
  }
  return ipNums;
};

module.exports = parseIp;
