import chai from 'chai';
import txtToArray from './txtToArray.js';

const { expect } = chai;

describe('txtToArray', () => {
  describe('given a pathfile', () => {
    it('should return the content as an array of numbers', () => {
      const expectedList = [1721, 979, 366, 299, 675, 1456];

      const result = txtToArray('./day-1/inputs/example.txt');

      expect(result).to.be.deep.equal(expectedList);
    });
  });
});
