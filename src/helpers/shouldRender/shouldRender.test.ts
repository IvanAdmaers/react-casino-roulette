import {
  shouldRenderTopCatcher,
  shouldRenderRightCatcher,
  shouldRenderBottomCatcher,
  shouldRenderCornerBetCatcher,
  shouldRenderSixLineBetCatcher,
} from '.';
import {
  shouldRenderChip,
  shouldRenderTopRightDoubleStreetCatcher,
  shouldRenderTopStreetCatcher,
} from '..';

describe('shouldRenderTopCatcher', () => {
  it('should return false for 18', () => {
    expect(shouldRenderTopCatcher(18)).toBe(false);
  });

  it('should return true for 17', () => {
    expect(shouldRenderTopCatcher(17)).toBe(true);
  });
});

describe('shouldRenderRightCatcher', () => {
  it('should return true for 31', () => {
    expect(shouldRenderRightCatcher(31)).toBe(true);
  });

  it('should return false for 34', () => {
    expect(shouldRenderRightCatcher(34)).toBe(false);
  });
});

describe('shouldRenderBottomCatcher', () => {
  it('should return true for 34', () => {
    expect(shouldRenderBottomCatcher(34)).toBe(true);
  });

  it('should return false for 35', () => {
    expect(shouldRenderBottomCatcher(35)).toBe(false);
  });
});

describe('shouldRenderCornerBetCatcher', () => {
  it('should return true for 16', () => {
    expect(shouldRenderCornerBetCatcher(16)).toBe(true);
  });

  it('should return true for 17', () => {
    expect(shouldRenderCornerBetCatcher(17)).toBe(true);
  });

  it('should return false for 18', () => {
    expect(shouldRenderCornerBetCatcher(18)).toBe(false);
  });

  it('should return false for 34', () => {
    expect(shouldRenderCornerBetCatcher(34)).toBe(false);
  });

  it('should return false for 35', () => {
    expect(shouldRenderCornerBetCatcher(35)).toBe(false);
  });
});

describe('shouldRenderSixLineBetCatcher', () => {
  it('should return true for 31', () => {
    expect(shouldRenderSixLineBetCatcher(31)).toBe(true);
  });

  it('should return false for 34', () => {
    expect(shouldRenderSixLineBetCatcher(34)).toBe(false);
  });
});

describe('shouldRenderChip', () => {
  const data = { '1': { icon: '/path/to/icon.png', number: 1 } };

  it('should return true for when we have a bet', () => {
    expect(shouldRenderChip('1', data)).toBe(true);
  });

  it('should return false when we do not have a bet', () => {
    expect(shouldRenderChip('0', data)).toBe(false);
  });
});

describe('shouldRenderTopStreetCatcher', () => {
  it('should return true for 36', () => {
    expect(shouldRenderTopStreetCatcher(36)).toBe(true);
  });

  it('should return false for 35', () => {
    expect(shouldRenderTopStreetCatcher(35)).toBe(false);
  });
});

describe('shouldRenderTopRightDoubleStreetCatcher', () => {
  it('should return true for 33', () => {
    expect(shouldRenderTopRightDoubleStreetCatcher(33)).toBe(true);
  });

  it('should return false for 36', () => {
    expect(shouldRenderTopRightDoubleStreetCatcher(36)).toBe(false);
  });

  it('should return false for 35', () => {
    expect(shouldRenderTopRightDoubleStreetCatcher(35)).toBe(false);
  });

  it('should return false for 34', () => {
    expect(shouldRenderTopRightDoubleStreetCatcher(34)).toBe(false);
  });
});
