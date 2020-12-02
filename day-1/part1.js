import { multiplicate } from '../utils/array.js';

import { discoverNumbersThanSum } from './discover.js';

export default (numbers) => {
  const result = discover2NumberThatSum2020(numbers);

  return multiplicate(result);
};

const discover2NumberThatSum2020 = (numbers) => discoverNumbersThanSum(2020, numbers, 2);
