import { separatedByBlankLines } from '../utils/inputReader.js';

import { resolvePart1 } from './part1.js';
import { resolvePart2 } from './part2.js';

const answers = separatedByBlankLines('./day-06/inputs/quest.txt');

const part1 = resolvePart1(answers);
const part2 = resolvePart2(answers);

// eslint-disable-next-line no-console
console.log(`Day 6, part 1: ${part1}`);
// eslint-disable-next-line no-console
console.log(`Day 6, part 2: ${part2}`);
