import chai from 'chai';

import {
  resolvePart2,
  findMissingInnerNumber,
} from './part2.js';

const { expect } = chai;

describe('day 5 - part 2', () => {
  describe('findMissingInnerNumber', () => {
    it('should the missing number in the list', () => {
      const list = [4, 5, 6, 8, 9, 10];

      const result = findMissingInnerNumber(list);

      expect(result).to.be.equal(7);
    });
  });
  describe('resolvePart2', () => {
    it('should get the inner missing seat id', () => {
      const seatIds = [
        'LLR',
        'LRL',
        'LRR',
        'RLL',
        'RRL',
      ];

      const result = resolvePart2(seatIds);

      expect(result).to.be.equal(5);
    });
  });
});
