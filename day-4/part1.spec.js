import chai from 'chai';
import { separatedByBlankLines } from '../utils/inputReader.js';
import { resolvePart1 } from './part1.js';

const { expect } = chai;

describe('day 3 - part 1', () => {
  let passports;
  beforeEach(() => {
    passports = separatedByBlankLines('./day-4/inputs/example.txt');
  });
  describe('resolvePart1', () => {
    it('should return the number of valid passports', () => {
      const result = resolvePart1(passports);

      expect(result).to.be.equal(2);
    });
  });
});
