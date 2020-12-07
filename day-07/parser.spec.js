import chai from 'chai';
import { parseRule } from './parser.js';

const { expect } = chai;

describe('parseRule', () => {
  describe('given "light red bags contain 1 bright white bag, 2 muted yellow bags."', () => {
    it('should return an object with the parse list given ', () => {
      const expectedValue = {
        color: 'light red',
        availableBags: [
          { color: 'bright white', quantity: 1 }, { color: 'muted yellow', quantity: 2 },
        ],
      };

      const result = parseRule('light red bags contain 1 bright white bag, 2 muted yellow bags.');

      expect(result).to.be.deep.equal(expectedValue);
    });
  });
  describe('given "bright white bags contain 1 shiny gold bag."', () => {
    it('should return an object with the parse list given ', () => {
      const expectedValue = {
        color: 'bright white', availableBags: [{ color: 'shiny gold', quantity: 1 }],
      };

      const result = parseRule('bright white bags contain 1 shiny gold bag.');

      expect(result).to.be.deep.equal(expectedValue);
    });
  });
  describe('given "faded blue bags contain no other bags."', () => {
    it('should return an object with the parse list given ', () => {
      const expectedValue = {
        color: 'faded blue', availableBags: [],
      };

      const result = parseRule('faded blue bags contain no other bags.');

      expect(result).to.be.deep.equal(expectedValue);
    });
  });
  // eslint-disable-next-line max-len
  describe('given "plaid white bags contain 4 bright bronze bags, 2 dotted cyan bags, 2 dark lavender bags, 5 shiny lavender bags."', () => {
    it('should return an object with the parse list given ', () => {
      const expectedValue = {
        color: 'plaid white',
        availableBags: [
          { color: 'bright bronze', quantity: 4 },
          { color: 'dotted cyan', quantity: 2 },
          { color: 'dark lavender', quantity: 2 },
          { color: 'shiny lavender', quantity: 5 },
        ],
      };

      // eslint-disable-next-line max-len
      const result = parseRule('plaid white bags contain 4 bright bronze bags, 2 dotted cyan bags, 2 dark lavender bags, 5 shiny lavender bags.');

      expect(result).to.be.deep.equal(expectedValue);
    });
  });
});
