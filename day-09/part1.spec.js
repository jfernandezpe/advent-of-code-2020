import chai from 'chai';

import { toArrayOfNumbers } from '../utils/inputReader.js';
import {
  resolvePart1,
  findTheError,
  isNumberSumOfTwo,
} from './part1.js';

const { expect } = chai;

describe('day9 - part 1', () => {
  let numbers;
  beforeEach(() => {
    numbers = toArrayOfNumbers('./day-09/inputs/example.txt');
  });
  describe('resolvePart1', () => {
    // eslint-disable-next-line max-len
    it('should calculate the value in the accumulator before run instruction a second time', () => {
      const questNumbers = toArrayOfNumbers('./day-09/inputs/quest.txt');
      const result = resolvePart1(questNumbers);

      expect(result).to.be.equal(1124361034);
    });
  });

  describe('findTheError', () => {
    describe('given an preamble', () => {
      it('should return the first number which is not the sum of two previous number', () => {
        const preamble = 5;

        const { number } = findTheError(numbers, preamble);

        expect(number).to.be.equal(127);
      });
      // eslint-disable-next-line max-len
      it("should return the first number's index which is not the sum of two previous number", () => {
        const preamble = 5;

        const { index } = findTheError(numbers, preamble);

        expect(index).to.be.equal(14);
      });
    });
  });

  describe('isNumberSumOfTwo', () => {
    it('should return true when the number to check is the sum of two number in the list', () => {
      const list = [65, 95, 102, 117, 150];
      const numberToCheck = 182;

      const result = isNumberSumOfTwo(numberToCheck, list);

      expect(result).to.be.equal(true);
    });
    // eslint-disable-next-line max-len
    it('should return false when the number to check is not the sum of two number in the list', () => {
      const list = [95, 102, 117, 150, 182];
      const numberToCheck = 127;

      const result = isNumberSumOfTwo(numberToCheck, list);

      expect(result).to.be.equal(false);
    });
  });
});
