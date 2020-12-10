import { sortNumbers } from '../utils/array.js';

export const resolvePart1 = (adapters) => multiplicationOfJumps(adapters);

const multiplicationOfJumps = (adapters) => {
  const { jolts1, jolts3 } = getJumps(adapters);

  return jolts1 * jolts3;
};

export const getJumps = (adapters) => {
  const sortedAdapters = sortNumbers(adapters);
  const addapterWithZero = [0, ...sortedAdapters];

  return addapterWithZero
    .map((adapter, index, all) => {
      const next = all[index + 1] || adapter + 3;

      return next - adapter;
    })
    .reduce((acc, jump) => {
      const typeName = `jolts${jump}`;
      const typeCount = acc[typeName] || 0;

      return {
        ...acc,
        [typeName]: typeCount + 1,
      };
    }, {});
};
