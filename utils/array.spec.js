import chai from 'chai';

import { fillArrayRange } from './array.js';

const { expect } = chai;

describe('fillArrayRange', () => {
  describe('given a minimun and a maximun value', () => {
    it('should return an array of number between the min and max', () => {
      const expectedArray = [10, 11, 12, 13, 14, 15];

      const result = fillArrayRange(10, 15);

      expect(result).to.be.deep.equal(expectedArray);
    });
  });
});
