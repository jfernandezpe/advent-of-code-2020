export const resolvePart1 = (input) => {
  const { time, lines } = parseInput(input);
  const earliestLine = findEarlistLine(time, lines);
  return waitingMinutesPerLineID(time, earliestLine);
};

export const parseInput = ([time, lines]) => ({
  time: parseInt(time, 10),
  lines: parseLines(lines),
});

export const parseLines = (lines) => lines.split(',')
  .map((bus) => parseInt(bus, 10))
  .filter((bus) => Number.isInteger(bus));

export const findEarlistLine = (time, lines) => {
  const linesWithEarliestTime = lines.map((line) => ({
    line,
    time: Math.ceil(time / line) * line,
  }));
  return linesWithEarliestTime.sort((a, b) => a.time - b.time)[0];
};

const waitingMinutesPerLineID = (time, line) => (line.time - time) * line.line;
