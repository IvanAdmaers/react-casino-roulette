export const getRandomArrayItem = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];
