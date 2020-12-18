import { toFieldValues } from '../utils/inputReader.js';
import { areDeepEqual } from '../utils/array.js';

export const OCCUPIED = 2;
export const EMPTY = 1;
const FLOOR = 0;

export const toSeatsLayout = (filepath) => {
  const values = [{ key: '.', value: 0 }, { key: 'L', value: 1 }, { key: '#', value: 2 }];

  return toFieldValues(filepath, values);
};

export const resolvePart1 = (waitingAreaLayout) => calculateEndUpOccupiedFiles(waitingAreaLayout);

const calculateEndUpOccupiedFiles = (waitingAreaLayout) => {
  const newState = getNextState(waitingAreaLayout);
  const areEqual = areDeepEqual(waitingAreaLayout, newState);

  if (areEqual) {
    return countOccupied(waitingAreaLayout);
  }
  return calculateEndUpOccupiedFiles(newState);
};

const countOccupied = (layout) => layout.flat().reduce((count, value) => {
  if (value === OCCUPIED) {
    return count + 1;
  }
  return count;
}, 0);

export const getNextState = (layout) => layout
  .map((row, x) => row.map((cell, y) => getSeatNextState(x, y, layout)));

// TODO: Optimize
// TODO: refactor part 2 in order to enable part 1 using part 2
export const getSeatNextState = (x, y, layout) => {
  const adjacentStates = getAdjacentStates(x, y, layout);
  const seatState = getSeatState(x, y, layout);
  if (seatState === EMPTY) {
    return adjacentStates.filter((state) => state === OCCUPIED).length === 0 ? OCCUPIED : EMPTY;
  }
  if (seatState === OCCUPIED) {
    return adjacentStates.filter((state) => state === OCCUPIED).length >= 4 ? EMPTY : OCCUPIED;
  }
  return FLOOR;
};

const getSeatState = (x, y, layout) => layout[x][y];
const getAdjacentStates = (x, y, layout) => {
  const adjacentRows = layout
    .filter((row, index) => index + 1 === x || index - 1 === x || index === x);

  const adjacentSeats = adjacentRows.map((row, rowIndex) => row.filter((cell, index) => {
    const isInnerSeat = rowIndex === 1 && index === y;
    if (isInnerSeat) {
      return index + 1 === y || index - 1 === y;
    }
    return index + 1 === y || index - 1 === y || index === y;
  }));

  return adjacentSeats.flat();
};
