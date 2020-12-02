import { removeDuplicates, removeItem, sum } from '../utils/array.js';

// eslint-disable-next-line import/prefer-default-export
export const discoverNumbersThanSum = (target, array, quantity) => {
  const numbers = removeDuplicates(array);
  if (quantity === 1) {
    return numbers.filter((item) => item === target);
  }

  return recursiveDiscoverNumbers(target, numbers, quantity);
};

const recursiveDiscoverNumbers = (target, numbers, quantity, foundedResult = []) => numbers.reduce((acc, number) => {
  const numbersButCurrent = removeItem(numbers, number);
  const newFoundResult = [number];

  const match = quantity === 2
    ? matchWithAnotherNumber(target, numbersButCurrent, number, foundedResult)
    : recursiveDiscoverNumbers(target, numbersButCurrent, quantity - 1, newFoundResult);
  return match.length >= 1 ? [...match, number] : acc;
}, []);

const matchWithAnotherNumber = (target, numbersButCurrent, numberA, foundedResult) => numbersButCurrent.filter((number) => sum([numberA, number, ...foundedResult]) === target);
