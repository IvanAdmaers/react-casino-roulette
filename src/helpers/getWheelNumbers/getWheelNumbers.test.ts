import { getWheelNumbers } from '.';

describe('getWheelNumbers', () => {
  it('should return a correct array of wheel numbers', () => {
    const numbers = getWheelNumbers();

    expect(numbers.length).toBe(38);
    expect(numbers.includes('0')).toBe(true);
    expect(numbers.includes('00')).toBe(true);
    expect(numbers.includes(undefined)).toBe(false);
  });
});
