const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    let people = [{name: 'Joe', age: 27}, {name: 'Sarah', age: 30}];
    expect(_.pluck(people, 'age')).toEqual([27,30]);
  });

});