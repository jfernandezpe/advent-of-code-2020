import chai from 'chai';
import txtToArray from './txtToArray.js';

import { discoverNumbersThanSum } from './discover.js';

const { expect } = chai;

describe('discoverNubmerThanSum', () => {
  let numbers;
  const target = 2020;
  beforeEach(() => {
    numbers = txtToArray('./day-1/inputs/example.txt');
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
