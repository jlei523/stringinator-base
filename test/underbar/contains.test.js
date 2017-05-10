const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    let arr = [1,2,3,4,5];
    let results = _.contains(arr, 2);
    expect(results).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    let arr = [1,2,3,4,5];
    let results = _.contains(arr, 7);
    expect(results).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    let obj = {
      a: '1',
      b: '2',
      c: '3'
    };

    let results = _.contains(obj, '2');
    expect(results).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    let obj = {
      a: '1',
      b: '2',
      c: '3'
    };

    let results = _.contains(obj, '4');
    expect(results).toBe(false);
  });

});