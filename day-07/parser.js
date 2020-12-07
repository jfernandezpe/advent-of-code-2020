export const parseRules = (rules) => rules.map(parseRule);

export const parseRule = (rule) => {
  const { color, nesteRules } = getRuleFragment(rule);

  return {
    color,
    availableBags: parseAvailableBags(nesteRules),
  };
};

const SEPARATOR = ' bags contain ';

const getRuleFragment = (rule) => {
  const splitted = rule.split(SEPARATOR);
  return {
    color: splitted[0],
    nesteRules: splitted[1],
  };
};

const parseAvailableBags = (rule) => {
  if (isNoNestedBags(rule)) {
    return [];
  }
  const splitedRules = rule.split(', ');

  return splitedRules.map((nestedBag) => {
    const bagsSeparateBySpace = nestedBag.split(' ');
    return {
      color: `${bagsSeparateBySpace[1]} ${bagsSeparateBySpace[2]}`,
      quantity: parseInt(bagsSeparateBySpace, 10),
    };
  });
};

const isNoNestedBags = (rule) => rule === 'no other bags.';
