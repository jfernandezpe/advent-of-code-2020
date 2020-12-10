import chai from 'chai';
import { separatedByBlankLines } from '../utils/inputReader.js';
import { resolvePart2 } from './part2.js';

const { expect } = chai;

describe('day 4 - part 2', () => {
  describe('resolvePart2', () => {
    it('should return mark as valid the valid password', () => {
      const validPassports = separatedByBlankLines('./day-04/inputs/example-valid.txt');

      const result = resolvePart2(validPassports);

      expect(result).to.be.equal(4);
    });
    it('should return mark as valid the invalid password', () => {
      const invalidPassports = separatedByBlankLines('./day-04/inputs/example-invalid.txt');

      const result = resolvePart2(invalidPassports);

      expect(result).to.be.equal(0);
    });
  });
});
