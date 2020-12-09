import chai from 'chai';
import {
  toArrayOfNumbers, toArrayOfText, toFieldBooleans, separatedByBlankLines, toKeyValue, toKeyValueInt,
} from './inputReader.js';

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
  describe('separatedByBlankLines', () => {
    it('should return a list separated by blank lines', () => {
      const expectedResult = [
        'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm',
        'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884 hcl:#cfa07d byr:1929',
        'hcl:#ae17e1 iyr:2013 eyr:2024 ecl:brn pid:760753108 byr:1931 hgt:179cm',
        'hcl:#cfa07d eyr:2025 pid:166559648 iyr:2011 ecl:brn hgt:59in',

      ];

      const result = separatedByBlankLines('./day-4/inputs/example.txt');

      expect(result).to.be.deep.equal(expectedResult);
    });
  });
  describe('toKeyValue', () => {
    it('should return a list of key values', () => {
      const expectedResult = [
        { key: 'nop', value: '+0' },
        { key: 'acc', value: '+1' },
        { key: 'jmp', value: '+4' },
        { key: 'acc', value: '+3' },
        { key: 'jmp', value: '-3' },
        { key: 'acc', value: '-99' },
        { key: 'acc', value: '+1' },
        { key: 'jmp', value: '-4' },
        { key: 'acc', value: '+6' },
      ];

      const separator = ' ';
      const result = toKeyValue('./day-08/inputs/example.txt', separator);

      expect(result).to.be.deep.equal(expectedResult);
    });
  });
  describe('toKeyValueInt', () => {
    it('should return a list of key values, which teh values are integet', () => {
      const expectedResult = [
        { key: 'nop', value: 0 },
        { key: 'acc', value: 1 },
        { key: 'jmp', value: 4 },
        { key: 'acc', value: 3 },
        { key: 'jmp', value: -3 },
        { key: 'acc', value: -99 },
        { key: 'acc', value: 1 },
        { key: 'jmp', value: -4 },
        { key: 'acc', value: 6 },
      ];

      const separator = ' ';
      const result = toKeyValueInt('./day-08/inputs/example.txt', separator);

      expect(result).to.be.deep.equal(expectedResult);
    });
  });
});
