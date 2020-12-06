import chai from 'chai';
import { toArrayOfText } from '../utils/inputReader.js';
import {
  resolvePart1, getSetId,
} from './part1.js';

const { expect } = chai;

describe('day 5 - part 1', () => {
  let seatCodes;
  beforeEach(() => {
    seatCodes = toArrayOfText('./day-5/inputs/example.txt');
  });
  describe('resolvePart1', () => {
    it('should return the maximun seta ID in the example', () => {
      const result = resolvePart1(seatCodes);

      expect(result).to.be.equal(820);
    });
  });
  describe('getSetId', () => {
    it('should return 567 with the code BFFFBBFRRR', () => {
      const result = getSetId('BFFFBBFRRR');

      expect(result).to.be.equal(567);
    });
    it('should return 119 with the code FFFBBBFRRR', () => {
      const result = getSetId('FFFBBBFRRR');

      expect(result).to.be.equal(119);
    });
    it('should return 820 with the code BBFFBBFRLL', () => {
      const result = getSetId('BBFFBBFRLL');

      expect(result).to.be.equal(820);
    });
  });
});
