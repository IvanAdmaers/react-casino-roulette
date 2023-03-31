import { isOdd } from '.';

describe('isOdd', () => {
  it('should return true for an odd number', () => {
    expect(isOdd(1)).toBe(true);
  });

  it('should return false for an even number', () => {
    expect(isOdd(2)).toBe(false);
  });
});
