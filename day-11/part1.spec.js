import chai from 'chai';

import {
  OCCUPIED,
  EMPTY,
  toSeatsLayout,
  resolvePart1,
  getNextState,
  getSeatNextState,
} from './part1.js';

const { expect } = chai;

describe('day11 - part 1', () => {
  let example;
  let example1;
  let example2;
  let quest;
  beforeEach(() => {
    example = toSeatsLayout('./day-11/inputs/example.txt');
    example1 = toSeatsLayout('./day-11/inputs/example1.txt');
    example2 = toSeatsLayout('./day-11/inputs/part1/example2.txt');
    quest = toSeatsLayout('./day-11/inputs/quest.txt');
  });
  describe('resolvePart1', () => {
    it('should calculate the sum of positions for the example', () => {
      const result = resolvePart1(example);

      expect(result).to.be.equal(37);
    });
    it('should calculate the sum of positions for the quest', () => {
      const result = resolvePart1(quest);

      expect(result).to.be.equal(2470);
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
      describe('and four or more seats adjacent to it are also occupied', () => {
        it('should become empty', () => {
          const layout = [
            [OCCUPIED, EMPTY, OCCUPIED],
            [OCCUPIED, OCCUPIED, EMPTY],
            [OCCUPIED, EMPTY, EMPTY],
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
});
