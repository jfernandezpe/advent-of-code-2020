import { toArrayOfText } from '../utils/inputReader.js';

import { resolvePart1 } from './part1.js';
// import { resolvePart2 } from './part2.js';

const data = toArrayOfText('./day-13/inputs/quest.txt');

const part1 = resolvePart1(data);
// const part2 = resolvePart2(data[1]);

// eslint-disable-next-line no-console
console.log(`Day 13, part 1: ${part1}`);
// console.log(`Day 13, part 2: ${part2}`);
// eslint-disable-next-line no-console
console.log('Day 13, part 2: XXXX');
