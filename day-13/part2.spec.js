import chai from 'chai';

import { toArrayOfText } from '../utils/inputReader.js';
import {
  resolvePart2, calcLeastCommonMultiple, calcFactors, calcFactorsReduce,
} from './part2.js';

const { expect } = chai;

describe('day13 - part 2', () => {
  describe('resolvePart2', () => {
    let example;
    // let quest;

    beforeEach(() => {
      example = toArrayOfText('./day-13/inputs/example.txt');
      // quest = toArrayOfText('./day-13/inputs/quest.txt');
    });

    describe('for input examples', () => {
      it('should calc the time that every lines match departs at the same time', () => {
        const testCases = [
          { input: '17,x,13,19', expected: 3417 },
          { input: '17,1,13,19', expected: 3417 },
          { input: '67,7,59,61', expected: 754018 },
          { input: '67,x,7,59,61', expected: 779210 },
          { input: '1789,37,47,1889', expected: 1202161486 },
        ];
        testCases.forEach(({ input, expected }, index) => {
          const result = resolvePart2(input);

          expect(expected, `trying test case ${index}`).to.be.equal(result);
        });
      });
    });
    describe('for the example', () => {
      it('should calc the time that every lines match departs at the same time', () => {
        const result = resolvePart2(example[1]);

        expect(result).to.be.equal(1068781);
      });
    });
    xdescribe('for the quest', () => {
      it('should calc the time that every lines match departs at the same time', () => {
        // eslint-disable-next-line max-len
        const result = resolvePart2('509,x,x,x,x,x,x,x,x,x,x,x,x,13,17,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,x,401,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,19');

        expect(result).to.be.equal(1068781);
      });
    });
  });

  xdescribe('leastCommonMultiple', () => {
    describe('calcLeastCommonMultiple', () => {
      it('should calculate the common lest multiple', () => {
        const testCases = [
          { input: [4, 6], expected: 12 },
          { input: [72, 50], expected: 1800 },
          { input: [17, 13, 19], expected: 1800 },
        ];
        testCases.forEach(({ input, expected }) => {
          const result = calcLeastCommonMultiple(input);

          expect(expected).to.be.equal(result);
        });
      });
    });
    describe('calcFactors', () => {
      it('should return the factor of a given number', () => {
        const testCases = [
          { input: 2, expected: [2] },
          { input: 3, expected: [3] },
          { input: 4, expected: [2, 2] },
          { input: 5, expected: [5] },
          { input: 6, expected: [2, 3] },
          { input: 8, expected: [2, 2, 2] },
          { input: 50, expected: [2, 5, 5] },
          { input: 72, expected: [2, 2, 2, 3, 3] },
        ];

        testCases.forEach(({ input, expected }) => {
          const factors = calcFactors(input);

          expect(expected).to.be.deep.equal(factors);
        });
      });
    });
    describe('calcFactorsReduce', () => {
      it('should return the factor of a given number grouped by factor', () => {
        const testCases = [
          { input: 2, expected: [{ factor: 2, times: 1 }] },
          { input: 6, expected: [{ factor: 2, times: 1 }, { factor: 3, times: 1 }] },
          { input: 50, expected: [{ factor: 2, times: 1 }, { factor: 5, times: 2 }] },
          { input: 72, expected: [{ factor: 2, times: 3 }, { factor: 3, times: 2 }] },
          { input: 67, expected: [{ factor: 67, times: 1 }] },
          { input: 7, expected: [{ factor: 7, times: 1 }] },
          { input: 59, expected: [{ factor: 59, times: 1 }] },
          { input: 61, expected: [{ factor: 61, times: 1 }] },
        ];

        testCases.forEach(({ input, expected }) => {
          const factors = calcFactorsReduce(input);

          expect(expected).to.be.deep.equal(factors);
        });
      });
    });
  });
});
