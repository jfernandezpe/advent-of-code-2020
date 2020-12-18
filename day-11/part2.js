import { areDeepEqual } from '../utils/array.js';

export const OCCUPIED = 2;
export const EMPTY = 1;
const FLOOR = 0;

export const resolvePart2 = (waitingAreaLayout) => calculateEndUpOccupiedFiles(waitingAreaLayout);

const calculateEndUpOccupiedFiles = (waitingAreaLayout) => {
  const newState = getNextState(waitingAreaLayout);
  const areEqual = areDeepEqual(waitingAreaLayout, newState);

  if (areEqual) {
    return countOccupied(waitingAreaLayout.flat());
  }
  return calculateEndUpOccupiedFiles(newState);
};

const countOccupied = (cells) => cells.reduce((count, value) => {
  if (value === OCCUPIED) {
    return count + 1;
  }
  return count;
}, 0);

export const getNextState = (layout) => layout
  .map((row, x) => row.map((cell, y) => getSeatNextState(x, y, layout)));

// TODO: Optimize
export const getSeatNextState = (x, y, layout) => {
  const occupiedSeats = calcNumberOccupiedSeats(x, y, layout);
  const seatState = getSeatState(x, y, layout);

  if (seatState === EMPTY) {
    return occupiedSeats === 0 ? OCCUPIED : EMPTY;
  }
  if (seatState === OCCUPIED) {
    return occupiedSeats >= 5 ? EMPTY : OCCUPIED;
  }
  return FLOOR;
};

const getSeatState = (x, y, layout) => layout[x][y];

export const calcNumberOccupiedSeats = (x, y, layout) => {
  // Directions:
  const A = getSeat(x, y, -1, -1, layout);
  const B = getSeat(x, y, -1, 0, layout);
  const C = getSeat(x, y, -1, 1, layout);
  const D = getSeat(x, y, 0, 1, layout);
  const E = getSeat(x, y, 0, -1, layout);
  const F = getSeat(x, y, 1, 1, layout);
  const G = getSeat(x, y, 1, 0, layout);
  const H = getSeat(x, y, 1, -1, layout);

  const seats = [A, B, C, D, E, F, G, H];
  return countOccupied(seats);
};

const getSeat = (x, y, movX, movY, layout) => {
  const newRow = layout[x + movX] || [];
  const newCell = newRow[y + movY];

  if (newCell === FLOOR) {
    const newMovX = movX + Math.sign(movX);
    const newMovY = movY + Math.sign(movY);
    return getSeat(x, y, newMovX, newMovY, layout);
  }
  return newCell;
};
