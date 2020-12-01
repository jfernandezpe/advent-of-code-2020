import txtToArray from '../utils/txtToArray.js';
import { resolvePart1 } from './part1.js';
import { resolvePart2 } from './part2.js';

const numbers = txtToArray('./day-1/inputs/quest.txt');
const part1 = resolvePart1(numbers);
const part2 = resolvePart2(numbers);

// eslint-disable-next-line no-console
console.log(`Day one, part 1: ${part1}`);
// eslint-disable-next-line no-console
console.log(`Day one, part 1: ${part2}`);
