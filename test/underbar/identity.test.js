const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(2)).toBe(2);
  });

  it('returns the same array if given an array', () => {
    expect(_.identity([1,2])).toEqual([1,2]);
  });

  it('returns the same object if given an object', () => {
    expect(_.identity({a: 1, b: 2})).toEqual({a: 1, b: 2});
  });
});