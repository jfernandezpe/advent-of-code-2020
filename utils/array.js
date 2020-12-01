export const multiplicate = (array) => array.reduce((total, number, index) => {
  if (index === 0) {
    return number;
  }
  return total * number;
}, 0);

export const sum = (array) => array.reduce((acc, item) => acc + item, 0);

export const removeItem = (array, itemToRemove) => array.filter((item) => itemToRemove !== item);

export const removeDuplicates = (array) => array.reduce((acc, item) => {
  if (acc.includes(item)) {
    return acc;
  }
  return [...acc, item];
}, []);
