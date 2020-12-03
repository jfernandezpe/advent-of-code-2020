import chai from 'chai';
import { toArrayOfNumbers, toArrayOfText, toFieldBooleans } from './inputReader.js';

const { expect } = chai;

describe('Input readers', () => {
  describe('toArrayOfNumbers', () => {
    describe('given a pathfile with numbers', () => {
      it('should return the content as an array of numbers', () => {
        const expectedList = [1721, 979, 366, 299, 675, 1456];

        const result = toArrayOfNumbers('./day-1/inputs/example.txt');

        expect(result).to.be.deep.equal(expectedList);
      });
    });
  });
  describe('toArrayOfNumbers', () => {
    describe('given a pathfile with text', () => {
      it('should return the content as an array of text', () => {
        const expectedList = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

        const result = toArrayOfText('./day-2/inputs/example.txt');

        expect(result).to.be.deep.equal(expectedList);
      });
    });
  });
  describe('toFieldOfBooleans', () => {
    describe('given a pathfile with text', () => {
      it('should return an array of array with booleans', () => {
        const expectedResult = [
          [false, false, true, true, false, false, false, false, false, false, false],
          [true, false, false, false, true, false, false, false, true, false, false],
          [false, true, false, false, false, false, true, false, false, true, false],
          [false, false, true, false, true, false, false, false, true, false, true],
          [false, true, false, false, false, true, true, false, false, true, false],
          [false, false, true, false, true, true, false, false, false, false, false],
          [false, true, false, true, false, true, false, false, false, false, true],
          [false, true, false, false, false, false, false, false, false, false, true],
          [true, false, true, true, false, false, false, true, false, false, false],
          [true, false, false, false, true, true, false, false, false, false, true],
          [false, true, false, false, true, false, false, false, true, false, true],
        ];

        const result = toFieldBooleans('./day-3/inputs/example.txt', '#');

        expect(result).to.be.deep.equal(expectedResult);
      });
    });
  });
});
