import chai from 'chai';

import { toArrayOfNumbers } from '../utils/inputReader.js';
import {
  resolvePart1,
  getJumps,
} from './part1.js';

const { expect } = chai;

describe('day10 - part 1', () => {
  let example1;
  let example2;
  let quest;
  beforeEach(() => {
    example1 = toArrayOfNumbers('./day-10/inputs/example1.txt');
    example2 = toArrayOfNumbers('./day-10/inputs/example2.txt');
    quest = toArrayOfNumbers('./day-10/inputs/quest.txt');
  });
  describe('resolvePart1', () => {
    // eslint-disable-next-line max-len
    it('should multiplicate the number of 1-jolt jumps and 3-jolt jumps with the first example', () => {
      const result = resolvePart1(example1);

      expect(result).to.be.equal(35);
    });
    // eslint-disable-next-line max-len
    it('should multiplicate the number of 1-jolt jumps and 3-jolt jumps with the second example', () => {
      const result = resolvePart1(example2);

      expect(result).to.be.equal(220);
    });
    // eslint-disable-next-line max-len
    it('should multiplicate the number of 1-jolt jumps and 3-jolt jumps with the second example', () => {
      const result = resolvePart1(quest);

      expect(result).to.be.equal(1836);
    });
  });

  describe('getJumps', () => {
    describe('with example 1', () => {
      it('should return 7 1-jolts jumps and 5 3-jolts jumps', () => {
        const expectedResult = { jolts1: 7, jolts3: 5 };

        const result = getJumps(example1);

        expect(result).to.be.deep.equal(expectedResult);
      });
      it('should return 22 1-jolts jumps and 10 3-jolts jumps', () => {
        const expectedResult = { jolts1: 22, jolts3: 10 };

        const result = getJumps(example2);

        expect(result).to.be.deep.equal(expectedResult);
      });
    });
  });
});
