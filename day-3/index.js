import { getFieldOfTrees, getNumberOfTreesOnPath } from './part1.js';
import { resolvePart2 } from './part2.js';

const field = getFieldOfTrees('./day-3/inputs/quest.txt');
const part1 = getNumberOfTreesOnPath(field);
const part2 = resolvePart2(field);

// eslint-disable-next-line no-console
console.log(`Day 3, part 1: ${part1}`);
// eslint-disable-next-line no-console
console.log(`Day 3, part 1: ${part2}`);
