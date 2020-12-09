import chai from 'chai';
import openAndParseInput from './inputReader.js';

import {
  resolvePart2,
  generatePossibleAlterations,
} from './part2.js';

const { expect } = chai;

describe('day 8 - part 2', () => {
  let instructions;
  beforeEach(() => {
    instructions = openAndParseInput('./day-08/inputs/example.txt');
  });
  describe('resolvePart1', () => {
    // eslint-disable-next-line max-len
    it('should calculate the value in the accumulator before run instruction a second time', () => {
      const result = resolvePart2(instructions);

      expect(result).to.be.equal(8);
    });
    it('should calculate the value of the input quest', () => {
      instructions = openAndParseInput('./day-08/inputs/quest.txt');

      const result = resolvePart2(instructions);

      expect(result).to.be.equal(2188);
    });
  });
  describe('generatePossibleAlterations', () => {
    it('should generate a list of all the possible instructions', () => {
      const expectedInstructions = [
        [
          { key: 'jmp', value: 0 },
          { key: 'acc', value: 1 },
          { key: 'jmp', value: 4 },
          { key: 'acc', value: 3 },
          { key: 'jmp', value: -3 },
          { key: 'acc', value: -99 },
          { key: 'acc', value: 1 },
          { key: 'jmp', value: -4 },
          { key: 'acc', value: 6 },
        ],
        [
          { key: 'nop', value: 0 },
          { key: 'acc', value: 1 },
          { key: 'nop', value: 4 },
          { key: 'acc', value: 3 },
          { key: 'jmp', value: -3 },
          { key: 'acc', value: -99 },
          { key: 'acc', value: 1 },
          { key: 'jmp', value: -4 },
          { key: 'acc', value: 6 },
        ],
        [
          { key: 'nop', value: 0 },
          { key: 'acc', value: 1 },
          { key: 'jmp', value: 4 },
          { key: 'acc', value: 3 },
          { key: 'nop', value: -3 },
          { key: 'acc', value: -99 },
          { key: 'acc', value: 1 },
          { key: 'jmp', value: -4 },
          { key: 'acc', value: 6 },
        ],
        [
          { key: 'nop', value: 0 },
          { key: 'acc', value: 1 },
          { key: 'jmp', value: 4 },
          { key: 'acc', value: 3 },
          { key: 'jmp', value: -3 },
          { key: 'acc', value: -99 },
          { key: 'acc', value: 1 },
          { key: 'nop', value: -4 },
          { key: 'acc', value: 6 },
        ],
      ];

      const result = generatePossibleAlterations(instructions);

      expect(result).to.be.deep.equal(expectedInstructions);
    });
  });
});
