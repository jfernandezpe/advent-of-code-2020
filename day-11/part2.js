import { areDeepEqual } from '../utils/array.js';
import { calcNumberOccupiedSeats, countOccupied, getAdjacentSeat } from './part1.js';

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

export const getNextState = (layout) => layout
  .map((row, x) => row.map((cell, y) => getSeatNextState(x, y, layout)));

export const getSeatNextState = (x, y, layout) => {
  const occupiedSeats = calcNumberOccupiedSeatsVisible(x, y, layout);
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

// eslint-disable-next-line max-len
export const calcNumberOccupiedSeatsVisible = (x, y, layout) => calcNumberOccupiedSeats(x, y, layout, getVisibleSeat);

const getVisibleSeat = (x, y, movX, movY, layout) => {
  const newCell = getAdjacentSeat(x, y, movX, movY, layout);

  if (newCell === FLOOR) {
    const newMovX = movX + Math.sign(movX);
    const newMovY = movY + Math.sign(movY);
    return getVisibleSeat(x, y, newMovX, newMovY, layout);
  }
  return newCell;
};
