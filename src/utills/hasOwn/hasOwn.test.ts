import { hasOwn } from '.';

const object = {
  name: 'John',
  get userName(): string {
    return object.name;
  },
  set setUserName(name: string) {
    object.name = name;
  },
};

describe('hasOwn', () => {
  it('should return true for an existing property', () => {
    expect(hasOwn(object, 'name')).toBe(true);
  });

  it('should return true for a getter', () => {
    expect(hasOwn(object, 'userName')).toBe(true);
  });

  it('should return true for a setter', () => {
    expect(hasOwn(object, 'setUserName')).toBe(true);
  });

  it('should return false for a non-existent property', () => {
    expect(hasOwn(object, 'property_that_doesnt_exist')).toBe(false);
  });

  it('should return false for a reference to the Object constructor', () => {
    expect(hasOwn(object, 'constructor')).toBe(false);
  });
});
