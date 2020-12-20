import { toArrayOfText } from '../utils/inputReader.js';

import { resolvePart1 } from './part1.js';
import { resolvePart2 } from './part2.js';

const layout = toArrayOfText('./day-12/inputs/quest.txt');

const part1 = resolvePart1(layout);
const part2 = resolvePart2(layout);

// eslint-disable-next-line no-console
console.log(`Day 12, part 1: ${part1}`);
// eslint-disable-next-line no-console
console.log(`Day 12, part 2: ${part2}`);
