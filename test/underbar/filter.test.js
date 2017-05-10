const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    expect(_.filter(arr, (item) => item % 2 !== 0)).toEqual([1,3,5,7,9]);
  });

  it('filters an object to only numeric values', () => {
    let arr = ['bob', '1','10',2,4,null];
    expect(_.filter(arr, (item) => typeof item === 'number')).toEqual([2,4]);
  });
});