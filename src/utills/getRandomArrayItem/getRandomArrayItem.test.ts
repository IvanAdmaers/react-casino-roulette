import { getRandomArrayItem } from '.';

describe('getRandomArrayItem', () => {
  it('should return a random array item', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(arr.includes(getRandomArrayItem(arr))).toBe(true);
  });
});
