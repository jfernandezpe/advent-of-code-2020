import chai from 'chai';
import { toArrayOfText } from '../utils/inputReader.js';
import {
  resolvePart2,
  requiredBagInside,
} from './part2.js';
import { parseRules } from './parser.js';

const { expect } = chai;

describe('day 7 - part 2', () => {
  let rules;
  beforeEach(() => {
    rules = toArrayOfText('./day-07/inputs/example.txt');
  });
  describe('resolvePart2', () => {
    it('should return how many individual bags are required inside a single shiny gold bag', () => {
      const result = resolvePart2(rules);

      expect(result).to.be.equal(32);
    });
  });
  describe('requiredBagInside', () => {
    describe('with the example 1 data', () => {
      it('should return 4 with example 1 with 1 nested', () => {
        const exmple1 = parseRules(toArrayOfText('./day-07/inputs/part2-example1-1level.txt'));

        const result = requiredBagInside('shiny gold', exmple1);

        expect(result).to.be.equal(4);
      });
      it('should return 33 with the full example', () => {
        const exmple1 = parseRules(toArrayOfText('./day-07/inputs/example.txt'));

        const result = requiredBagInside('shiny gold', exmple1);

        expect(result).to.be.equal(33);
      });
    });
    describe('with the example 2 data', () => {
      it('should return zero when there is zero nested levels', () => {
        const tdd0rules = parseRules(toArrayOfText('./day-07/inputs/part2-0levels.txt'));

        const result = requiredBagInside('shiny gold', tdd0rules);

        expect(result).to.be.equal(1);
      });
      it('should calculate the total bags when there is 1 nested level', () => {
        const tdd1rules = parseRules(toArrayOfText('./day-07/inputs/part2-1levels.txt'));

        const result = requiredBagInside('shiny gold', tdd1rules);

        expect(result).to.be.equal(3);
      });
      it('should calculate the total bags when there is 2 nested levels', () => {
        const tdd0rules = parseRules(toArrayOfText('./day-07/inputs/part2-2levels.txt'));

        const result = requiredBagInside('shiny gold', tdd0rules);

        expect(result).to.be.equal(7);
      });
      it('should calculate the total bags when there is 3 nested levels', () => {
        const tdd0rules = parseRules(toArrayOfText('./day-07/inputs/part2-3levels.txt'));

        const result = requiredBagInside('shiny gold', tdd0rules);

        expect(result).to.be.equal(15);
      });
    });
  });
});
