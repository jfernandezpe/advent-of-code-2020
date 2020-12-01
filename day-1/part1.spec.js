import chai from 'chai';
import txtToArray from '../utils/txtToArray.js';
import { resolvePart1 } from './part1.js';

const { expect } = chai;

xdescribe('day 1 - part 1', () => {
  let numbers;
  beforeEach(() => {
    numbers = txtToArray('./day-1/inputs/example.txt');
  });
  describe('resolve part 1', () => {
    describe('given the example list', () => {
      it('should return the multiplication of the two numbers than sum 2020', () => {
        const result = resolvePart1(numbers);

        expect(result).to.be.equal(514579);
      });
    });
  });
});
