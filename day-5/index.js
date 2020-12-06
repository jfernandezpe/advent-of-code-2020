import { toArrayOfText } from '../utils/inputReader.js';

import { resolvePart1 } from './part1.js';
import { resolvePart2 } from './part2.js';

const seatsCodes = toArrayOfText('./day-5/inputs/quest.txt');

const part1 = resolvePart1(seatsCodes);
const part2 = resolvePart2(seatsCodes);

// eslint-disable-next-line no-console
console.log(`Day 5, part 1: ${part1}`);
// eslint-disable-next-line no-console
console.log(`Day 5, part 1: ${part2}`);
