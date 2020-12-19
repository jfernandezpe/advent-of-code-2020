import chai from 'chai';

import { toSeatsLayout } from './part1.js';
import {
  OCCUPIED,
  EMPTY,
  resolvePart2,
  getNextState,
  getSeatNextState,
  calcNumberOccupiedSeatsVisible,
} from './part2.js';

const { expect } = chai;

describe('day11 - part 2', () => {
  let example;
  let example1;
  let example2;
  let example3;
  let quest;
  beforeEach(() => {
    example = toSeatsLayout('./day-11/inputs/example.txt');
    example1 = toSeatsLayout('./day-11/inputs/example1.txt');
    example2 = toSeatsLayout('./day-11/inputs/part2/example2.txt');
    example3 = toSeatsLayout('./day-11/inputs/part2/example3.txt');
    quest = toSeatsLayout('./day-11/inputs/quest.txt');
  });
  describe('resolvePart2', () => {
    it('should calculate 26 occupied seats for the input example', () => {
      const result = resolvePart2(example);

      expect(result).to.be.equal(26);
    });
    it('should calculate the quest result for the quest input', () => {
      const result = resolvePart2(quest);

      expect(result).to.be.equal(2259);
    }).timeout(5000);
  });

  describe('getNextState', () => {
    it('should calculate the first state for the example', () => {
      const nextState = getNextState(example);

      expect(nextState).to.be.deep.equal(example1);
    });
    it('should calculate the second state for the example', () => {
      const nextState = getNextState(example1);

      expect(nextState).to.be.deep.equal(example2);
    });
    it('should calculate the third state for the example', () => {
      const nextState = getNextState(example2);

      expect(nextState).to.be.deep.equal(example3);
    });
  });
  describe('getSeatNextState', () => {
    const x = 1;
    const y = 1;
    describe('when a seat is empty (L)', () => {
      describe('and there are no occupied seats adjacent to it', () => {
        const layout = [[EMPTY, EMPTY, EMPTY], [EMPTY, EMPTY, EMPTY], [EMPTY, EMPTY, EMPTY]];
        it('should become occupied', () => {
          const newState = getSeatNextState(x, y, layout);

          expect(newState).to.be.equal(OCCUPIED);
        });
      });
      describe('and there is a ocuppied seat adjacent to it', () => {
        it('should still be empty', () => {
          const layout = [[OCCUPIED, EMPTY, EMPTY], [EMPTY, EMPTY, EMPTY], [EMPTY, EMPTY, EMPTY]];
          const newState = getSeatNextState(x, y, layout);

          expect(newState).be.be.equal(EMPTY);
        });
      });
    });
    describe('when a seat is occupied (#)', () => {
      describe('and five or more seats adjacent to it are also occupied', () => {
        it('should become empty', () => {
          const layout = [
            [OCCUPIED, EMPTY, OCCUPIED],
            [OCCUPIED, OCCUPIED, EMPTY],
            [OCCUPIED, EMPTY, OCCUPIED],
          ];

          const newState = getSeatNextState(x, y, layout);

          expect(newState).to.be.equal(EMPTY);
        });
      });
      describe('and three or less seats adjacent to it are also occupied', () => {
        it('should still be occupied', () => {
          const layout = [
            [EMPTY, EMPTY, OCCUPIED],
            [OCCUPIED, OCCUPIED, EMPTY],
            [OCCUPIED, EMPTY, EMPTY],
          ];
          const newState = getSeatNextState(x, y, layout);

          expect(newState).to.be.equal(OCCUPIED);
        });
      });
    });
  });
  describe('calcNumberOccupiedSeatsVisible', () => {
    it('should see 8 occupied seat in the visibility example 1', () => {
      const x = 4;
      const y = 3;
      const layout = toSeatsLayout('./day-11/inputs/part2/visibility1.txt');

      const numberOccupiedSeats = calcNumberOccupiedSeatsVisible(x, y, layout);

      expect(numberOccupiedSeats).to.be.equal(8);
    });
  });
});
