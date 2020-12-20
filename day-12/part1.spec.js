import chai from 'chai';

import { toArrayOfText } from '../utils/inputReader.js';
import {
  resolvePart1, calculateNewDirection, calculateRoute, getNextPosition,
} from './part1.js';

const { expect } = chai;

describe('day12 - part 1', () => {
  describe('resolvePart1', () => {
    let example;
    let quest;
    beforeEach(() => {
      example = toArrayOfText('./day-12/inputs/example.txt');
      quest = toArrayOfText('./day-12/inputs/quest.txt');
    });
    it('should calculate 37 occupied seats for the input example', () => {
      const result = resolvePart1(example);

      expect(result).to.be.equal(25);
    });
    it('should calculate the quest result for the quest input', () => {
      const result = resolvePart1(quest);

      expect(result).to.be.equal(319);
    }).timeout(5000);
  });
  describe('calculateRoute', () => {
    it('should calculate the position after all the actions', () => {
      const example = toArrayOfText('./day-12/inputs/example.txt');

      const expectedPosition = {
        x: 17,
        y: -8,
      };

      const { position } = calculateRoute(example);

      expect(position).to.be.deep.equal(expectedPosition);
    });
  });

  describe('getNextPosition', () => {
    it('should calulcate the next position', () => {
      const action = 'F11';
      const position = {
        x: 17,
        y: 3,
      };
      const direction = 'S';

      const expectedPosition = {
        position: {
          x: 17,
          y: -8,
        },
        direction,
      };

      const positionResult = getNextPosition(position, action, direction);

      expect(positionResult).to.be.deep.equal(expectedPosition);
    });
  });

  describe('calculateNewDirection', () => {
    it('should calculate the new direction', () => {
      const data = [
        { direction: 'E', action: 'R90', expected: 'S' },
        { direction: 'E', action: 'R180', expected: 'W' },
        { direction: 'E', action: 'R270', expected: 'N' },
        { direction: 'S', action: 'R90', expected: 'W' },
        { direction: 'S', action: 'R270', expected: 'E' },
        { direction: 'W', action: 'R180', expected: 'E' },
        { direction: 'N', action: 'R90', expected: 'E' },
        { direction: 'E', action: 'R90', expected: 'S' },

        { direction: 'E', action: 'L180', expected: 'W' },
        { direction: 'E', action: 'L270', expected: 'S' },
        { direction: 'S', action: 'L90', expected: 'E' },
        { direction: 'S', action: 'L270', expected: 'W' },
        { direction: 'W', action: 'L180', expected: 'E' },
        { direction: 'N', action: 'L90', expected: 'W' },

        { direction: 'N', action: 'F6', expected: 'N' },
        { direction: 'S', action: 'F6', expected: 'S' },
        { direction: 'E', action: 'F6', expected: 'E' },
        { direction: 'W', action: 'F6', expected: 'W' },

        { direction: '', action: 'N5', expected: 'N' },
        { direction: '', action: 'S5', expected: 'S' },
        { direction: '', action: 'W4', expected: 'W' },
        { direction: '', action: 'E23', expected: 'E' },
      ];
      data.forEach(({ action, direction, expected }) => {
        const newDirection = calculateNewDirection(action, direction);

        expect(expected, `case direction: ${direction} action: ${action} -`)
          .to.be.equal(newDirection);
      });
    });
  });
});
