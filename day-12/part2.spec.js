import chai from 'chai';

import { toArrayOfText } from '../utils/inputReader.js';
import {
  resolvePart2, calculateRoute, getNextState,
} from './part2.js';

const { expect } = chai;

describe('day12 - part 2', () => {
  describe('resolvePart2', () => {
    let example;
    let quest;
    beforeEach(() => {
      example = toArrayOfText('./day-12/inputs/example.txt');
      quest = toArrayOfText('./day-12/inputs/quest.txt');
    });
    it('should calculate 37 occupied seats for the input example', () => {
      const result = resolvePart2(example);

      expect(result).to.be.equal(286);
    });
    it('should calculate the quest result for the quest input', () => {
      const result = resolvePart2(quest);

      expect(result).to.be.equal(50157);
    }).timeout(5000);
  });
  describe('calculateRoute', () => {
    it('should calculate the position after all the actions', () => {
      const example = toArrayOfText('./day-12/inputs/example.txt');

      const expectedPosition = {
        x: 214,
        y: -72,
      };

      const { position } = calculateRoute(example);

      expect(position).to.be.deep.equal(expectedPosition);
    });
  });
  describe('getNextState', () => {
    it('should calculate the example state 1', () => {
      const action = 'F10';
      const inputState = {
        position: { x: 0, y: 0 },
        waypoint: { x: 10, y: 1 },
      };

      const result = getNextState(action, inputState);

      const expectedState = {
        position: { x: 100, y: 10 },
        waypoint: { x: 10, y: 1 },
      };

      expect(result).be.be.deep.equal(expectedState);
    });
    it('should calculate the example state 2', () => {
      const action = 'N3';
      const inputState = {
        position: { x: 100, y: 10 },
        waypoint: { x: 10, y: 1 },
      };

      const result = getNextState(action, inputState);

      const expectedState = {
        position: { x: 100, y: 10 },
        waypoint: { x: 10, y: 4 },
      };

      expect(result).be.be.deep.equal(expectedState);
    });
    it('should calculate the example state 3', () => {
      const action = 'F7';
      const inputState = {
        position: { x: 100, y: 10 },
        waypoint: { x: 10, y: 4 },
      };

      const result = getNextState(action, inputState);

      const expectedState = {
        position: { x: 170, y: 38 },
        waypoint: { x: 10, y: 4 },
      };

      expect(result).be.be.deep.equal(expectedState);
    });
    it('should calculate the example state 4', () => {
      const action = 'R90';
      const inputState = {
        position: { x: 170, y: 38 },
        waypoint: { x: 10, y: 4 },
      };

      const result = getNextState(action, inputState);

      const expectedState = {
        position: { x: 170, y: 38 },
        waypoint: { x: 4, y: -10 },
      };

      expect(result).be.be.deep.equal(expectedState);
    });
    it('should calculate the example state 5', () => {
      const action = 'F11';
      const inputState = {
        position: { x: 170, y: 38 },
        waypoint: { x: 4, y: -10 },
      };

      const result = getNextState(action, inputState);

      const expectedState = {
        position: { x: 214, y: -72 },
        waypoint: { x: 4, y: -10 },
      };

      expect(result).be.be.deep.equal(expectedState);
    });
  });
});
