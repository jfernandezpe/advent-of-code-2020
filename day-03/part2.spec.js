import chai from 'chai';
import {
  getFieldOfTrees,
} from './part1.js';
import {
  resolvePart2,
  removeRows,
  calculateTreesWithMovements,
} from './part2.js';

const { expect } = chai;

describe('day 3 - part 2', () => {
  let field;

  beforeEach(() => {
    field = getFieldOfTrees('./day-03/inputs/example.txt');
  });

  describe('removeRows', () => {
    describe('given the number of movements in y in 1', () => {
      it('should not remove any field if number of movmenet is 1', () => {
        const result = removeRows(field, 1);

        expect(result).to.be.deep.equal(field);
      });
      it('should not remove any field if number of movmenet is 2', () => {
        const fieldOnlyOdd = getFieldOfTrees('./day-03/inputs/fieldOnlyOdd.txt');

        const result = removeRows(field, 2);

        expect(result).to.be.deep.equal(fieldOnlyOdd);
      });
    });
  });
  describe('calculateTreesWithMovements', () => {
    describe('given the number of movements in x and y', () => {
      it('should return the number of three found in the path', () => {
        const movements = {
          x: 1,
          y: 2,
        };

        const result = calculateTreesWithMovements(field, movements);

        expect(result).to.be.equal(2);
      });
    });
  });
  describe('resolvePart2', () => {
    it('should multiplicate the values of many cases', () => {
      const result = resolvePart2(field);

      expect(result).to.be.equal(336);
    });
  });
});
