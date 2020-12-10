import chai from 'chai';
import {
  getFieldOfTrees,
  calcRequiredColumns, getNumberOfTreesOnPath, expandRow, getXForY,
} from './part1.js';

const { expect } = chai;

describe('day 3 - part 1', () => {
  let field;
  const numMovInX = 3;
  const numOfRows = 11;
  beforeEach(() => {
    field = getFieldOfTrees('./day-03/inputs/example.txt');
  });
  describe('getNumberOfTreesOnPath', () => {
    describe('given a field', () => {
      it('should return the number of threes in the path', () => {
        const result = getNumberOfTreesOnPath(field);

        expect(result).to.be.equal(7);
      });
    });
  });
  describe('expandRow', () => {
    describe('given the number of movement in X and the number of rows', () => {
      it('show expand the row width', () => {
        const expectedResult = [false, true, false, false, true, false, false, false, true, false, true, false, true, false, false, true, false, false, false, true, false, true, false, true, false, false, true, false, false, false, true];
        const inputRow = [false, true, false, false, true, false, false, false, true, false, true];

        const result = expandRow(inputRow, numOfRows, numMovInX);

        expect(result).to.be.deep.equal(expectedResult);
      });
    });
  });
  describe('calcRequiredColumns', () => {
    describe('given the number of movement in X and the number of rows', () => {
      it('should calculate the number of required columnss', () => {
        const result = calcRequiredColumns(numOfRows, numMovInX);

        expect(result).to.be.equal(31);
      });
    });
  });

  describe('getXForY', () => {
    describe('given a Y position and number of movements in X is 3 ', () => {
      it('should return 0 when y is 0', () => {
        const y = 0;
        const result = getXForY(y, numMovInX);

        expect(result).to.be.equal(0);
      });
      it('should return 3 when y is 1', () => {
        const y = 1;

        const result = getXForY(y, numMovInX);

        expect(result).to.be.equal(3);
      });
      it('should return 6 when y is 2', () => {
        const y = 2;

        const result = getXForY(y, numMovInX);

        expect(result).to.be.equal(6);
      });
    });
  });
});
