export const resolvePart1 = (actions) => {
  const { position } = calculateRoute(actions);

  return Math.abs(position.x) + Math.abs(position.y);
};

export const calculateRoute = (actions,
  initialPosition = { x: 0, y: 0 },
  initialDirection = 'E') => {
  const { position, direction } = getNextPosition(initialPosition, actions[0], initialDirection);
  const remaininActions = actions.slice(1);

  if (remaininActions.length > 0) {
    return calculateRoute(remaininActions, position, direction);
  }
  return { position, direction };
};

export const getNextPosition = (position, action, direction) => {
  if (isRotation(action)) {
    return {
      position,
      direction: calculateNewDirection(action, direction),
    };
  }

  const movements = getMovements(action);
  if (action.charAt(0) === 'F') {
    return {
      position: calculatePositionWithDirection(position, direction, movements),
      direction,
    };
  }
  const newDirection = calculateNewDirection(action, direction);

  return {
    position: calculatePositionWithDirection(position, newDirection, movements),
    direction,
  };
};

const isRotation = (action) => ['R', 'L'].includes(action.charAt(0));

const getMovements = (action) => parseInt(action.substring(1), 10);

export const calculateNewDirection = (action, direction) => {
  const reoutes = {
    E: 'ESWN',
    S: 'SWNE',
    W: 'WNES',
    N: 'NESW',
  };
  const turn = parseInt(action.substring(1), 10) / 90;

  if (action.charAt(0) === 'R') {
    return reoutes[direction][turn];
  }
  if (action.charAt(0) === 'L') {
    return reverseString(reoutes[direction])[turn - 1];
  }
  if (action.charAt(0) === 'F') {
    return direction;
  }
  return action.charAt(0);
};

const calculatePositionWithDirection = (waypoint, direction, movements) => {
  const newWaypoint = { ...waypoint };

  if (direction === 'E') {
    newWaypoint.x += movements;
  }
  if (direction === 'W') {
    newWaypoint.x -= movements;
  }
  if (direction === 'N') {
    newWaypoint.y += movements;
  }
  if (direction === 'S') {
    newWaypoint.y -= movements;
  }
  return newWaypoint;
};

const reverseString = (text) => text.split('').reverse().join('');
