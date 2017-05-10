const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    let arr = [1,2,3,4,5];
    expect(_.reduce(arr, (acc, item) => acc + item, 10)).toBe(25);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    let arr = [1,2,3,4,5];
    expect(_.reduce(arr,(acc, item) => acc + item)).toBe(15);
  });

});