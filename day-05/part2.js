import { getSeatIdsFromList } from './part1.js';

export const resolvePart2 = (codes) => {
  const seatSorted = getSeatIdsFromList(codes);

  return findMissingInnerNumber(seatSorted);
};

export const findMissingInnerNumber = (list) => {
  const sortedList = list.sort((a, b) => a - b);

  return sortedList.find((number, index, array) => (array[index + 1] !== (number + 1))) + 1;
};
