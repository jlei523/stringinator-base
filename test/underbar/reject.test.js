const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    let arr = [1,2,3,4,5,6];
    expect(_.reject(arr, (item) => item % 2 !== 0)).toEqual([2,4,6]);
  });

  it('rejects null values from an object', () => {
    let obj = {
    	a: 'a',
    	b: null,
    	c: 'c',
    	d: undefined
    }
    expect(_.reject(obj, (value) => value === null)).toEqual(['a', 'c', undefined]);
  });
});