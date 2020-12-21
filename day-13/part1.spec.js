import chai from 'chai';

import { toArrayOfText } from '../utils/inputReader.js';
import {
  resolvePart1, parseInput, findEarlistLine,
} from './part1.js';

const { expect } = chai;

describe('day13 - part 1', () => {
  let example;
  let quest;
  const time = 939;
  const lines = [7, 13, 59, 31, 19];

  beforeEach(() => {
    example = toArrayOfText('./day-13/inputs/example.txt');
    quest = toArrayOfText('./day-13/inputs/quest.txt');
  });
  describe('resolvePart1', () => {
    describe('for the example', () => {
      // eslint-disable-next-line max-len
      it("should calculate the ID of the earliest bus multiplied by the number of minutes you'll need to wait for that bus", () => {
        const result = resolvePart1(example);

        expect(result).to.be.equal(295);
      });
    });
    describe('for the quest', () => {
      it('should calculate the quest result for the quest input', () => {
        const result = resolvePart1(quest);

        expect(result).to.be.equal(2406);
      });
    });
  });
  describe('findEarlierLine', () => {
    it('should calculate the earlier lint that you can take for a given time', () => {
      const earlierLine = findEarlistLine(time, lines);

      expect(earlierLine).to.be.deep.equal({ line: 59, time: 944 });
    });
  });

  describe('parseInput', () => {
    it('should parse the input for the example', () => {
      const exampleConfig = {
        time,
        lines,
      };

      const inputParsed = parseInput(example);

      expect(inputParsed).to.be.deep.equal(exampleConfig);
    });
  });
});
