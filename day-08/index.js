import openAndParseInput from './inputReader.js';

import { resolvePart1 } from './part1.js';
import { resolvePart2 } from './part2.js';

const instructions = openAndParseInput('./day-08/inputs/quest.txt');

const part1 = resolvePart1(instructions);
const part2 = resolvePart2(instructions);

// eslint-disable-next-line no-console
console.log(`Day 8, part 1: ${part1}`);
// eslint-disable-next-line no-console
console.log(`Day 8, part 2: ${part2}`);
