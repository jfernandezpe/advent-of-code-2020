import { toArrayOfText } from '../utils/inputReader.js';

import { resolvePart1 } from './part1.js';
import { resolvePart2 } from './part2.js';

const rules = toArrayOfText('./day-07/inputs/quest.txt');

const part1 = resolvePart1(rules);
const part2 = resolvePart2(rules);

// eslint-disable-next-line no-console
console.log(`Day 7, part 1: ${part1}`);
// eslint-disable-next-line no-console
console.log(`Day 7, part 2: ${part2}`);
