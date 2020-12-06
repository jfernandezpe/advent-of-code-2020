import { replaceAll } from '../utils/string.js';

export const resolvePart1 = (seatCodes) => {
  const seatIds = getSeatIdsFromList(seatCodes);
  return Math.max(...seatIds);
};

export const getSeatIdsFromList = (seatCodes) => seatCodes.map((code) => getSetId(code));

export const getSetId = (code) => {
  const binarySetId = getBinarySetId(code);
  return parseInt(binarySetId, 2);
};

const getBinarySetId = (code) => replaceCharToBinnary(replaceCharToBinnary(code, 'B', 'F'), 'R', 'L');

const replaceCharToBinnary = (code, one, zero) => replaceAll(replaceAll(code, one, 1), zero, 0);
