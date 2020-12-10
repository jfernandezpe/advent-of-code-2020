import { discoverContiguousNumberThanSum } from '../utils/discoverNumberThanSum.js';
import { findTheError } from './part1.js';

export const resolvePart2 = (numbers) => {
  const preamble = 25;

  return findEncryptionWeakness(numbers, preamble);
};

export const findEncryptionWeakness = (numbers, preamble) => {
  const numbersThanSumTheError = findContiguousThanSumTheError(numbers, preamble);
  const maximun = Math.max(...numbersThanSumTheError);
  const minimun = Math.min(...numbersThanSumTheError);

  return maximun + minimun;
};

export const findContiguousThanSumTheError = (numbers, preamble) => {
  const { number, index } = findTheError(numbers, preamble);

  const numbersWhereIsTheError = numbers.slice(0, index);

  return discoverContiguousNumberThanSum(number, numbersWhereIsTheError);
};
