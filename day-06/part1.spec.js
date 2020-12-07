import chai from 'chai';
import { separatedByBlankLines } from '../utils/inputReader.js';
import {
  resolvePart1,
  getUniqueAnswers,
} from './part1.js';

const { expect } = chai;

describe('day 6 - part 1', () => {
  let answerGroups;
  beforeEach(() => {
    answerGroups = separatedByBlankLines('./day-06/inputs/example.txt');
  });
  describe('resolvePart1', () => {
    it('should return the number of unique answers in the groups', () => {
      const result = resolvePart1(answerGroups);

      expect(result).to.be.equal(11);
    });
  });
  describe('getUniqueAnwser', () => {
    it('should return 3 for "a b c"', () => {
      const group = 'a b c';

      const result = getUniqueAnswers(group);

      expect(result).to.be.equal(3);
    });
    it('should return 3 for "ab ac"', () => {
      const group = 'ab ac';

      const result = getUniqueAnswers(group);

      expect(result).to.be.equal(3);
    });
    it('should return 3 for "a a a a"', () => {
      const group = 'a a a a';

      const result = getUniqueAnswers(group);

      expect(result).to.be.equal(1);
    });
    it('should return 3 for "b"', () => {
      const group = 'b';

      const result = getUniqueAnswers(group);

      expect(result).to.be.equal(1);
    });
  });
});
