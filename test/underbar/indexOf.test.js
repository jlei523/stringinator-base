const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    let arr = [1,2,3,4,5];
    expect(_.indexOf(arr, 1)).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    let arr = [1,2,3,4,5];
    expect(_.indexOf(arr, 5)).toBe(4);
  });

  it('returns -1 for a missing value', () => {
    let arr = [1,2,3,4,5];
    expect(_.indexOf(arr, 6)).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    let arr = [1,2,1,4,5];
    expect(_.indexOf(arr, 1)).toBe(0);
  });

  it('starts searching at the given offset', () => {
    let arr = [1,2,4,3,3,3];
    expect(_.indexOf(arr, 3, 2)).toBe(3);

  });

});