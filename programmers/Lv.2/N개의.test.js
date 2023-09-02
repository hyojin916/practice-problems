const nLcm = require('./N개의 최소공배수');

test('Arr 요소들의 최소 공배수 - case 1', () => {
  expect(nLcm([2, 6, 8, 14])).toBe(168);
});

test('Arr 요소들의 최소 공배수 - case 2', () => {
  expect(nLcm([1, 2, 3])).toBe(6);
});
