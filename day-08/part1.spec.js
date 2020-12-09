import chai from 'chai';
import openAndParseInput from './inputReader.js';

import {
  resolvePart1,
  calculateNextStep,
} from './part1.js';

const { expect } = chai;

describe('day8 - part 1', () => {
  let instructions;
  beforeEach(() => {
    instructions = openAndParseInput('./day-08/inputs/example.txt');
  });
  describe('resolvePart1', () => {
    // eslint-disable-next-line max-len
    it('should calculate the value in the accumulator before run instruction a second time', () => {
      const result = resolvePart1(instructions);

      expect(result).to.be.equal(5);
    });
  });
  describe('calculateNextStep', () => {
    it('should calculate the accumulator', () => {
      const { acc } = calculateNextStep(instructions, [], 0, 0);
      expect(5).to.be.equal(acc);
    });
    it('should return the stack', () => {
      const expectedStack = [0, 1, 2, 6, 7, 3, 4];

      const { stack } = calculateNextStep(instructions);

      expect(expectedStack).to.be.deep.equal(stack);
    });
  });
});
