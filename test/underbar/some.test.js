const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    let arr = [1,2,3,4,5,6];
    expect(_.some(arr, item => item % 2 !==0)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    let arr = [2,4,6];
    expect(_.some(arr, item => item % 2 !==0)).toBe(false);
  });

});