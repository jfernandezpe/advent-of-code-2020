import {
  removeDuplicates, removeItem, sum,
} from './array.js';

// eslint-disable-next-line import/prefer-default-export
export const discoverNumbersThanSum = (target, array, quantity) => {
  const numbers = removeDuplicates(array);
  if (quantity === 1) {
    return numbers.filter((item) => item === target);
  }

  return recursiveDiscoverNumbers(target, numbers, quantity);
};

const recursiveDiscoverNumbers = (target, numbers, quantity, foundedResult = []) => numbers
  .reduce((acc, number) => {
    const numbersButCurrent = removeItem(numbers, number);
    const newFoundResult = [number];

    const match = quantity === 2
      ? matchWithAnotherNumber(target, numbersButCurrent, number, foundedResult)
      : recursiveDiscoverNumbers(target, numbersButCurrent, quantity - 1, newFoundResult);
    return match.length >= 1 ? [...match, number] : acc;
  }, []);

const matchWithAnotherNumber = (target, numbersButCurrent, numberA, foundedResult) => numbersButCurrent
  .filter((number) => sum([numberA, number, ...foundedResult]) === target);

  //TODO: I should refactor this function. Avoiding for/while do it much complex
export const discoverContiguousNumberThanSum = (target, list) => {
  const maximun = list.length;

  return list.reduce((numbersThanSum, item, index, array) => {
    if (numbersThanSum.length > 0) {
      return numbersThanSum;
    }
    const numberToCheck = array.slice(index, index + maximun);
    const contiguousNumbersThanSum = sumContiguousNumbersUntilTarget(0, target, numberToCheck);
    return contiguousNumbersThanSum.length > 0 ? contiguousNumbersThanSum : [];
  }, []);
};

const sumContiguousNumbersUntilTarget = (acc, target, list) => {
  if (list.length === 0) {
    return [];
  }
  const currentItem = list[0];
  const currentSum = acc + currentItem;
  if (currentSum > target) {
    return [];
  }
  if (currentSum < target) {
    const newList = list.slice(1);
    const numbersThanSumTarget = sumContiguousNumbersUntilTarget(currentSum, target, newList);
    return numbersThanSumTarget.length > 0 ? [currentItem, ...numbersThanSumTarget] : [];
  }
  return [currentItem];
};
