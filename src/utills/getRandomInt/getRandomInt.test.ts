import { getRandomInt } from '.';

describe('getRandomInt', () => {
  it('should return a number within a diaposone', () => {
    const min = 1;
    const max = 10;
    const int = getRandomInt(min, max);

    expect(typeof int === 'number').toBe(true);
    expect(int >= min).toBe(true);
    expect(int <= max).toBe(true);
  });
});
