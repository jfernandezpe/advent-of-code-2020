import chai from 'chai';
import { separatedByBlankLines } from '../utils/inputReader.js';
import {
  resolvePart2,
  getDuplicateAnswers,
} from './part2.js';

const { expect } = chai;

describe('day 6 - part 2', () => {
  let answerGroups;
  beforeEach(() => {
    answerGroups = separatedByBlankLines('./day-06/inputs/example.txt');
  });
  describe('resolvePart2', () => {
    it('should return the example value', () => {
      const result = resolvePart2(answerGroups);

      expect(result).to.be.equal(6);
    });
  });
  describe('getUniqueAnwser', () => {
    it('should return 3 for "abc"', () => {
      const group = 'abc';

      const result = getDuplicateAnswers(group);

      expect(result).to.be.equal(3);
    });
    it('should return 3 for "a b c"', () => {
      const group = 'a b c';

      const result = getDuplicateAnswers(group);

      expect(result).to.be.equal(0);
    });
    it('should return 3 for "ab ac"', () => {
      const group = 'ab ac';

      const result = getDuplicateAnswers(group);

      expect(result).to.be.equal(1);
    });
    it('should return 3 for "a a a a"', () => {
      const group = 'a a a a';

      const result = getDuplicateAnswers(group);

      expect(result).to.be.equal(1);
    });
    it('should return 3 for "b"', () => {
      const group = 'b';

      const result = getDuplicateAnswers(group);

      expect(result).to.be.equal(1);
    });
  });
});
