import chai from 'chai';
import { toArrayOfNumbers } from '../utils/inputReader.js';
import resolvePart2 from './part2.js';

const { expect } = chai;

describe('day 1', () => {
  let numbers;
  beforeEach(() => {
    numbers = toArrayOfNumbers('./day-01/inputs/example.txt');
  });
  describe('resolve part 2', () => {
    describe('given the example list', () => {
      describe('discover3NumberThatSum2020', () => {
        it('should return the multiplication of the two numbers than sum 2020', () => {
          const result = resolvePart2(numbers);

          expect(result).to.be.equal(241861950);
        });
      });
    });
  });
});
