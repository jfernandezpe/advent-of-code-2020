export const resolvePart2 = (actions) => {
  const { position } = calculateRoute(actions);

  return Math.abs(position.x) + Math.abs(position.y);
};

export const calculateRoute = (actions,
  initialState = { position: { x: 0, y: 0 }, waypoint: { x: 10, y: 1 } }) => {
  const { waypoint, position } = getNextState(actions[0], initialState);
  const remaininActions = actions.slice(1);

  if (remaininActions.length > 0) {
    return calculateRoute(remaininActions, { waypoint, position });
  }
  return { waypoint, position };
};

// eslint-disable-next-line consistent-return
export const getNextState = (action, state) => {
  const { waypoint, position } = state;

  if (isRotation(action)) {
    return {
      waypoint: rotateWaypoint(action, waypoint),
      position,
    };
  }

  const movements = getMovements(action);

  if (action.charAt(0) === 'F') {
    return {
      waypoint,
      position: calculateNewPosition(position, waypoint, movements),
    };
  }

  if (isMoveWaypoint(action)) {
    return {
      waypoint: calculateNewWaypoint(waypoint, movements, action),
      position,
    };
  }
};

const isRotation = (action) => ['R', 'L'].includes(action.charAt(0));

const isMoveWaypoint = (action) => ['N', 'E', 'S', 'W'].includes(action.charAt(0));

const getMovements = (action) => parseInt(action.substring(1), 10);

const calculateNewPosition = (position, waypoint, movements) => ({
  x: position.x + waypoint.x * movements,
  y: position.y + waypoint.y * movements,
});

const rotateWaypoint = (action, waypoint) => {
  const numOfTurn = calcNumOfTurns(action);
  return turnWaypoint(waypoint, numOfTurn);
};

const turnWaypoint = (waypoint, numOfTurn) => {
  const newWaypoint = {
    x: waypoint.y,
    y: waypoint.x * -1,
  };
  if (numOfTurn === 1) {
    return newWaypoint;
  }
  return turnWaypoint(newWaypoint, numOfTurn - 1);
};

const calcNumOfTurns = (action) => {
  const offset = action.charAt(0) === 'L' ? 4 : 0;

  return Math.abs(offset - parseInt(action.substring(1), 10) / 90);
};

const calculateNewWaypoint = (waypoint, movements, action) => {
  const newPostion = { ...waypoint };
  const direction = action.charAt(0);

  if (direction === 'E') {
    newPostion.x += movements;
  }
  if (direction === 'W') {
    newPostion.x -= movements;
  }
  if (direction === 'N') {
    newPostion.y += movements;
  }
  if (direction === 'S') {
    newPostion.y -= movements;
  }
  return newPostion;
};
