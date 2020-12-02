import chai from 'chai';
import { toArrayOfText } from '../utils/inputReader.js';
import { getNumberOfValidPasswords, isValidPassword } from './part1.js';

const { expect } = chai;

describe('day 2 - part 1', () => {
  let passwords;
  beforeEach(() => {
    passwords = toArrayOfText('./day-2/inputs/example.txt');
  });
  describe('getNumberOfValidPasswords', () => {
    describe('given the password table', () => {
      it('should retuns the number of valid password', () => {
        const result = getNumberOfValidPasswords(passwords);

        expect(result).to.be.deep.equal(2);
      });
    });
  });

  describe('isValidPassword', () => {
    describe('given the example values', () => {
      it('the first password should be valid', () => {
        const result = isValidPassword(passwords[0]);

        expect(result).to.be.true;
      });
      it('the second password should be invalid', () => {
        const result = isValidPassword(passwords[1]);
        expect(result).to.be.false;
      });
      it('the third password should be invalid', () => {
        const result = isValidPassword(passwords[2]);

        expect(result).to.be.true;
      });
    });
  });
});
