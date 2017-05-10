const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    let arr = [1,2,3,4,5];
    expect(_.map(arr, (item) => item * item)).toEqual([1,4,9,16,25]);
  });
});