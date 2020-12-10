import chai from 'chai';
import { toArrayOfText } from '../utils/inputReader.js';
import { getNumberOfValidPasswords, isValidPassword, validatePasswordRules } from './part2.js';

const { expect } = chai;

describe('day 2 - part 2', () => {
  let passwords;
  beforeEach(() => {
    passwords = toArrayOfText('./day-02/inputs/example.txt');
  });
  describe('getNumberOfValidPasswords', () => {
    describe('given the password table', () => {
      it('should retuns the number of valid password', () => {
        const result = getNumberOfValidPasswords(passwords);

        expect(result).to.be.deep.equal(1);
      });
    });
  });

  describe('isValidPassword', () => {
    describe('given the example values', () => {
      it('the first password should be valid', () => {
        const result = isValidPassword(passwords[0]);

        expect(result).to.be.true;
      });
      it('the second password should be valid', () => {
        const result = isValidPassword(passwords[1]);
        expect(result).to.be.false;
      });
      it('the third password should be invalid', () => {
        const result = isValidPassword(passwords[2]);
        expect(result).to.be.false;
      });
    });
  });

  describe('validating password rules', () => {
    it('should be valid if the char is in one of the given positions', () => {
      const result = validatePasswordRules('abcde', 'a', [1, 3]);

      expect(result).to.be.true;
    });
    it('should be invalid if the char in neither given positions', () => {
      const result = validatePasswordRules('cdefg', 'b', [1, 3]);

      expect(result).to.be.false;
    });
    it('should be invalid if the char is both given positions', () => {
      const result = validatePasswordRules('ccccccccc', 'c', [2, 9]);

      expect(result).to.be.false;
    });
  });
});
