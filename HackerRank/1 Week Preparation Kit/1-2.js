// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-one

function miniMaxSum(arr) {
  // positive integer + arr.length is 5.
  // 1. sorting arr => add 4 in order (min) /add opposite 4 (max)

  arr.sort((a, b) => a - b);
  const min = arr.slice(0, 4);
  const max = arr.slice(1);

  // console.log(min, max);
  const minSum = min.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const maxSum = max.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(`${minSum} ${maxSum}`);
}
