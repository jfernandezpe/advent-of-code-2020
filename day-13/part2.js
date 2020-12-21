export const resolvePart2 = (linesToParse) => {
  const lines = linesToParse.split(',')
    .map((bus) => parseInt(bus, 10));

  const numRealLines = lines.length - 1;
  return calcCommon(lines, numRealLines);
};

const calcCommon = (lines, length) => {
  const first = lines[0];
  const last = lines[lines.length - 1];

  let timestamp;
  let timestampLast;
  let multiple = 1;

  do {
    multiple += 1;
    timestamp = (first * multiple);
    timestampLast = timestamp + length;
  } while (!isMatch(timestamp, timestampLast, last, lines));
  return timestamp;
};

const isMatch = (timestamp, timestampLast, last, lines) => {
  if (timestampLast % last === 0) {
    const inMiddle = lines.map((number, index) => {
      if (Number.isNaN(number)) {
        return true;
      }
      return (timestamp + index) % number === 0;
    });

    if (inMiddle.every((middle) => middle)) {
      return timestamp;
    }
  }
  return false;
};

/* USE LESS, TODO: move to Math library */
export const calcLeastCommonMultiple = (numbers) => {
  const factors = calcAllFactors(numbers);

  const factorsWithMaxExponents = findFactorWithMaxExponents(factors);

  return multiplicateFactors(factorsWithMaxExponents);
};
const calcAllFactors = (numbers) => numbers.map((number) => calcFactorsReduce(number)).flat();

const findFactorWithMaxExponents = (factors) => factors.reduce((withMaxExponent, factor) => {
  const index = withMaxExponent.findIndex((accFactor) => accFactor.factor === factor.factor);
  if (withMaxExponent[index]) {
    if (withMaxExponent[index].times > factor.times) {
      return withMaxExponent;
    }
    const copy = [...withMaxExponent];
    copy[index].times = factor.times;
    return copy;
  }
  return [
    ...withMaxExponent,
    factor,
  ];
}, []);

const multiplicateFactors = (factors) => factors
  .reduce((acc, factor) => acc * (factor.factor ** factor.times), 1);

export const calcFactors = (number, multiplicator = 2) => {
  if (number === multiplicator) {
    return [number];
  }
  if (number % multiplicator === 0) {
    const nextNumber = number / multiplicator;
    return [multiplicator, ...calcFactors(nextNumber, multiplicator)];
  }
  return calcFactors(number, multiplicator + 1);
};

export const calcFactorsReduce = (numberToFactorize) => {
  const factors = calcFactors(numberToFactorize);
  return countFactors(factors);
};

const countFactors = (factorsToCount) => factorsToCount
  .reduce((acc, number) => {
    const factors = [...acc];
    const index = acc.findIndex((factor) => factor.factor === number);
    if (factors[index]) {
      factors[index] = {
        factor: number,
        times: factors[index].times + 1,
      };
      return factors;
    }
    return [
      ...factors,
      {
        factor: number,
        times: 1,
      },
    ];
  }, []);
