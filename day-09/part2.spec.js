import chai from 'chai';

import { toArrayOfNumbers } from '../utils/inputReader.js';
import {
  resolvePart2,
  findContiguousThanSumTheError,
  findEncryptionWeakness,
} from './part2.js';

const { expect } = chai;

describe('day9 - part 2', () => {
  let numbers;
  beforeEach(() => {
    numbers = toArrayOfNumbers('./day-09/inputs/example.txt');
  });
  describe('resolvePart1', () => {
    it('should calculate the value in the accumulator before run instruction a second time', () => {
      const questNumbers = toArrayOfNumbers('./day-09/inputs/quest.txt');

      const result = resolvePart2(questNumbers);

      expect(result).to.be.equal(129444555);
    });
  });

  describe('findContiguousThanSumTheError', () => {
    it('should return the list of numbers than sum the error', () => {
      const preamble = 5;

      const result = findContiguousThanSumTheError(numbers, preamble);

      expect(result).to.be.deep.equal([15, 25, 47, 40]);
    });
  });
  describe('findEncryptionWeakness', () => {
    it('should return the sum of the minimun and maximun numer than sum the error', () => {
      const preamble = 5;

      const result = findEncryptionWeakness(numbers, preamble);

      expect(result).to.be.deep.equal(62);
    });
  });
});
