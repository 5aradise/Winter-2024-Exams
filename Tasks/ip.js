// Split string by the first occurrence of separator

'use strict';

const parseIp = (ip) => {
  const parseIp = [];
  const ipNumStrs = ip.split('.');
  if (ipNumStrs.length !== 4) return;
  for (const ipNumStr of ipNumStrs) {
    const ipNum = parseInt(ipNumStr);
    if (isNaN(ipNum)) return;
    parseIp.push(ipNum);
  }
  return parseIp;
};

module.exports = parseIp;
