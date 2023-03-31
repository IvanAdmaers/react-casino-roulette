/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
export const getRandomInt = (minNumber: number, maxNumber: number) => {
  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
