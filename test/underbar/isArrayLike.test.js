const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    let arr = [1,2,3,4,5];
    expect(_.isArrayLike(arr)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    let arrLikeObj = {
    	a: 1,
    	b: 2,
    	c: 3,
    	length: 3
    };
    expect(_.isArrayLike(arrLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    let obj = {
    	a: 1,
    	b: 2,
    	c: 3
    };
    expect(_.isArrayLike(obj)).toBe(false);
  });
});
