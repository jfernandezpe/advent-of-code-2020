import { separatedByBlankLines } from '../utils/inputReader.js';

import { resolvePart1 } from './part1.js';
import { resolvePart2 } from './part2.js';

const passport = separatedByBlankLines('./day-4/inputs/quest.txt');

const part1 = resolvePart1(passport);
const part2 = resolvePart2(passport);

// eslint-disable-next-line no-console
console.log(`Day 4, part 1: ${part1}`);
// eslint-disable-next-line no-console
console.log(`Day 4, part 1: ${part2}`);
