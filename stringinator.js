const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  return _.reject(str.split(''), item => item === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str.split(''), item => item === target);
};

const isOnlyDigits = function(str) {
  return _.every(str.split(''), item => !isNaN(Number(item)));
};

const filterToOnlyDigits = function(str) {
  return _.reject(str, item => isNaN(parseFloat(item))).join('');
};

const truncateString = function(val, maxLength) {
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  return _.map(obj, value => truncateString(value, maxLength));
};

const countChars = function(str) {
  let obj = {};
  _.each(_.uniq(str), item => obj[item] = str.split(item).length-1);
  return obj;
};

const dedup = function(str) {
  return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};