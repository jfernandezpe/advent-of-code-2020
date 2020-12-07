import { removeDuplicates } from '../utils/array.js';
import { parseRules } from './parser.js';

export const resolvePart1 = (rules) => {
  const parsedRules = parseRules(rules);

  return bagThatEnable('shiny gold', parsedRules).length;
};

export const bagThatEnable = (color, rules) => {
  const parents = getChildren(color, rules);

  const parentEnable = parents.flatMap((parentColor) => bagThatEnable(parentColor, rules));

  return removeDuplicates([...parents, ...parentEnable]);
};

export const getChildren = (color, rules) => rules
  .filter((rule) => rule.availableBags.find((nestedBag) => nestedBag.color === color))
  .map(getBagColor);

const getBagColor = (bag) => bag.color;
