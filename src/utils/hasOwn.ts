export const hasOwn = (object: object, property: string): boolean =>
  Object.prototype.hasOwnProperty.call(object, property);
