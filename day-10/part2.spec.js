import chai from 'chai';

import { toArrayOfNumbers } from '../utils/inputReader.js';
import {
  resolvePart2,
  calculatePossiblePaths,
  getNextNodes,
} from './part2.js';

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
  describe('resolvePart2', () => {
    // eslint-disable-next-line max-len
    it('should multiplicate the number of 1-jolt jumps and 3-jolt jumps with the first example', () => {
      const result = resolvePart2(example1);

      expect(result).to.be.equal(8);
    });
    // eslint-disable-next-line max-len
    it('should multiplicate the number of 1-jolt jumps and 3-jolt jumps with the second example', () => {
      const result = resolvePart2(example2);

      expect(result).to.be.equal(19208);
    });
    // eslint-disable-next-line max-len
    it('should multiplicate the number of 1-jolt jumps and 3-jolt jumps with the second example', () => {
      const result = resolvePart2(quest);

      expect(result).to.be.equal(43406276662336);
    });
  });

  describe('calculatePossiblePaths', () => {
    it('should calculate 1 posible path when the graph has a posible path', () => {
      const chain = [0, 3, 6, 9, 10];

      const result = calculatePossiblePaths(chain);

      expect(result).to.be.equal(1);
    });
    it('should calculate 2 posible path when the graph has 2 posible paths', () => {
      const chain = [0, 1, 2, 5];

      const result = calculatePossiblePaths(chain);

      expect(result).to.be.equal(2);
    });
  });

  describe('getNextNode', () => {
    it('should return the next nodes when there are 3 availables', () => {
      const nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      const currentNode = 4;

      const result = getNextNodes(currentNode, nodes);

      expect(result).to.be.deep.equal([5, 6, 7]);
    });
    it('should return the next nodes when there are 2 availables', () => {
      const nodes = [0, 1, 2, 3, 4, 6, 7, 8];
      const currentNode = 4;

      const result = getNextNodes(currentNode, nodes);

      expect(result).to.be.deep.equal([6, 7]);
    });
    it('should return the next nodes when there are 1 available', () => {
      const nodes = [0, 1, 2, 3, 4, 7, 8];
      const currentNode = 4;

      const result = getNextNodes(currentNode, nodes);

      expect(result).to.be.deep.equal([7]);
    });
  });
});
