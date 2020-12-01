import { multiplicate } from '../utils/array.js';

import { discoverNumbersThanSum } from '../utils/discover.js';

export const resolvePart2 = (numbers) => {
  const result = discover3NumberThatSum2020(numbers);

  return multiplicate(result);
};

const discover3NumberThatSum2020 = (numbers) => discoverNumbersThanSum(2020, numbers, 3);
