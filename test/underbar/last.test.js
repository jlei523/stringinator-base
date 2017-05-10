const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    let arr = [1,2,3,4,5];
    expect(_.last(arr)).toBe(5);

  });

  it('returns the last 2 elements of an array', () => {
  	let arr = [1,2,3,4,5];
  	expect(_.last(arr, 2)).toEqual([4,5]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    let arr = [1,2,3,4,5];
    expect(_.last(arr,10)).toEqual([1,2,3,4,5]);
  });
});