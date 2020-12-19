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

export const countOccupied = (layout) => layout.flat().filter((value) => value === OCCUPIED).length;

export const getNextState = (layout) => layout
  .map((row, x) => row.map((cell, y) => getSeatNextState(x, y, layout)));

export const getSeatNextState = (x, y, layout) => {
  const numberOcupiedSeats = calcNumberOccupiedSeatsAdjacent(x, y, layout);
  const seatState = getSeatState(x, y, layout);
  if (seatState === EMPTY) {
    return numberOcupiedSeats === 0 ? OCCUPIED : EMPTY;
  }
  if (seatState === OCCUPIED) {
    return numberOcupiedSeats >= 4 ? EMPTY : OCCUPIED;
  }
  return FLOOR;
};

// eslint-disable-next-line max-len
export const calcNumberOccupiedSeatsAdjacent = (x, y, layout) => calcNumberOccupiedSeats(x, y, layout, getAdjacentSeat);

export const calcNumberOccupiedSeats = (x, y, layout, searchEngine) => {
  // Directions:
  const NW = searchEngine(x, y, -1, -1, layout);
  const N = searchEngine(x, y, -1, 0, layout);
  const NE = searchEngine(x, y, -1, 1, layout);
  const E = searchEngine(x, y, 0, 1, layout);
  const SE = searchEngine(x, y, 1, 1, layout);
  const S = searchEngine(x, y, 0, -1, layout);
  const SW = searchEngine(x, y, 1, -1, layout);
  const W = searchEngine(x, y, 1, 0, layout);

  const seats = [NW, N, NE, E, SE, S, SW, W];
  return countOccupied(seats);
};

// eslint-disable-next-line max-len
export const getAdjacentSeat = (x, y, movX, movY, layout) => getSeatState(x + movX, y + movY, layout);

const getSeatState = (x, y, layout) => {
  const row = layout[x] || [];
  return row[y];
};
