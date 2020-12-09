import chai from 'chai';
import { toArrayOfNumbers } from './inputReader.js';

import {
  discoverNumbersThanSum,
  discoverContiguousNumberThanSum,
} from './discoverNumberThanSum.js';

const { expect } = chai;

describe('discover numbers', () => {
  describe('discoverNubmerThanSum', () => {
    let numbers;
    const target = 2020;
    beforeEach(() => {
      numbers = toArrayOfNumbers('./day-1/inputs/example.txt');
    });
    describe('given a list, a target and the quantity of number to use', () => {
      it('should return empty array if the numbers are not found it when the quantity is 1', () => {
        const result = discoverNumbersThanSum(target, [], 1);

        expect(result).to.be.deep.equal([]);
      });
      it('should return the number than sum the target  if when the quantity is 1', () => {
        const result = discoverNumbersThanSum(target, [target], 1);

        expect(result).to.be.deep.equal([target]);
      });
      it('should discover the two numbers than sum the target if when the quantity is 2', () => {
        const result = discoverNumbersThanSum(target, numbers, 2);

        expect(result).to.be.deep.equal([1721, 299]);
      });
      it('should discover the two numbers than sum the target if when the quantity is 3', () => {
        const result = discoverNumbersThanSum(target, numbers, 3);

        expect(result).to.be.deep.equal([979, 366, 675]);
      });
    });
  });
  describe('discoverContiguousNumberThanSum', () => {
    describe('given a target number, a list and a maximun numbers to check', () => {
      it('should discover n number than sum the target', () => {
        const target = 6;
        const list = [3, 5, 2, 4, 3];

        const result = discoverContiguousNumberThanSum(target, list);

        expect(result).to.be.deep.equal([2, 4]);
      });
      it('should discover n number than sum the target', () => {
        const target = 127;
        const list = [
          35, 20, 15, 25, 47, 40,
          62, 55, 65, 95, 102, 117,
          150, 182,
        ];

        const result = discoverContiguousNumberThanSum(target, list);

        expect(result).to.be.deep.equal([15, 25, 47, 40]);
      });
    });
  });
});
