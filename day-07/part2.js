import { parseRules } from './parser.js';
import { sum } from '../utils/array.js';

export const resolvePart2 = (rules) => {
  const parsedRules = parseRules(rules);

  return requiredBagInside('shiny gold', parsedRules) - 1;
};

export const requiredBagInside = (color, rules, d = 0) => {
  const nestedBags = getNestedBags(color, rules);
  const withNestedItems = nestedBags.availableBags.map((insideBag) => ({
    ...insideBag,
    nestedQuantity: requiredBagInside(insideBag.color, rules, d + 1),
  }));

  const result = withNestedItems.map((item) => item.quantity * item.nestedQuantity);

  return 1 + sum(result);
};

const getNestedBags = (color, rules) => rules.find((rule) => rule.color === color);
