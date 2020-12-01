import chai from 'chai';
import txtToArray from '../utils/txtToArray.js';
import { resolvePart2 } from './part2.js';

const { expect } = chai;

xdescribe('day 1', () => {
  let numbers;
  beforeEach(() => {
    numbers = txtToArray('./day-1/inputs/example.txt');
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
