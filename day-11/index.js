import { resolvePart1, toSeatsLayout } from './part1.js';
import { resolvePart2 } from './part2.js';

const layout = toSeatsLayout('./day-11/inputs/quest.txt');

const part1 = resolvePart1(layout);
const part2 = resolvePart2(layout);

// eslint-disable-next-line no-console
console.log(`Day 11, part 1: ${part1}`);
// eslint-disable-next-line no-console
console.log(`Day 11, part 2: ${part2}`);
