import { discoverNumbersThanSum } from '../utils/discoverNumberThanSum.js';
import { fillArrayRange } from '../utils/array.js';

export const resolvePart1 = (numbers) => {
  const preamble = 25;
  const { number } = findFirstNumberIsNotTheSumOfPreviousNumbers(numbers, preamble);
  return number;
};

export const findFirstNumberIsNotTheSumOfPreviousNumbers = (numbers, preamble) => {
  const iterable = fillArrayRange(preamble, numbers.length);

  const indexFound = iterable.find((index) => {
    const list = filterListToCheck(numbers, index, preamble);
    const numberToCheck = numbers[index];

    return !isNumberSumOfTwoInList(numberToCheck, list);
  });

  return { number: numbers[indexFound], index: indexFound };
};

const filterListToCheck = (list, index, preamble) => list.slice(index - preamble, index);

export const isNumberSumOfTwoInList = (numberToCheck, list) => {
  const quantityOfNumberToSum = 2;
  const numbers = discoverNumbersThanSum(numberToCheck, list, quantityOfNumberToSum);

  const areAddends = numbers.length === quantityOfNumberToSum;
  return areAddends;
};
