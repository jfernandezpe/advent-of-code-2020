import chai from 'chai';
import { toArrayOfText } from '../utils/inputReader.js';
import {
  resolvePart1,
  getChildren,
  bagThatEnable,
} from './part1.js';
import { parseRules } from './parser.js';

const { expect } = chai;

describe('day 7 - part 1', () => {
  let rules;
  beforeEach(() => {
    rules = toArrayOfText('./day-07/inputs/example.txt');
  });
  describe('resolvePart1', () => {
    // eslint-disable-next-line max-len
    it('should calculate the number of colors that can eventually contain at least one shiny gold bag', () => {
      const result = resolvePart1(rules);

      expect(result).to.be.equal(4);
    });
  });

  describe('getChildren', () => {
    describe('given the example parsed rules', () => {
      it('should return that bright white and muted yellow for shiny gold', () => {
        const parsedRules = parseRules(rules);
        const expectedResult = ['bright white', 'muted yellow'];

        const result = getChildren('shiny gold', parsedRules);

        expect(expectedResult).to.be.deep.equal(result);
      });
    });
  });
  describe('bagThatEnable', () => {
    describe('with 1 nested levels', () => {
      describe('given a list of parsed rules and a color', () => {
        // eslint-disable-next-line max-len
        it("should return 'bright white' and 'muted yellow' for the example rules when the color is shiny gold", () => {
          const rulesTdd = toArrayOfText('./day-07/inputs/part1-1level.txt');
          const parsedRules = parseRules(rulesTdd);
          const expectedResult = ['bright white', 'muted yellow'];

          const result = bagThatEnable('shiny gold', parsedRules);

          expect(expectedResult).to.be.deep.equal(result);
        });
      });
    });
    describe('with 2 nested levels', () => {
      describe('given a list of parsed rules and the color shiny gold', () => {
        // eslint-disable-next-line max-len
        it("should return 'bright white', 'muted yellow', 'light red' and 'dark orange' for the example rules", () => {
          const rulesTdd = toArrayOfText('./day-07/inputs/example.txt');
          const parsedRules = parseRules(rulesTdd);
          const expectedResult = ['bright white', 'muted yellow', 'light red', 'dark orange'];

          const result = bagThatEnable('shiny gold', parsedRules);

          expect(expectedResult).to.be.deep.equal(result);
        });
      });
    });
    describe('with 3 nested levels', () => {
      describe('given a list of parsed rules and the color shiny gold', () => {
        // eslint-disable-next-line max-len
        it("should return 'bright white', 'muted yellow', 'light red', 'dark orange', 'fashion pink' for the example rules", () => {
          const rulesTdd = toArrayOfText('./day-07/inputs/part1-3levels.txt');
          const parsedRules = parseRules(rulesTdd);
          const expectedResult = [
            'bright white', 'muted yellow', 'light red', 'dark orange', 'fashion pink',
          ];

          const result = bagThatEnable('shiny gold', parsedRules);

          expect(expectedResult).to.be.deep.equal(result);
        });
      });
    });
  });
});
