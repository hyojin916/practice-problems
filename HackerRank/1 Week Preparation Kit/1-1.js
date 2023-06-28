// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-one

function plusMinus(arr) {
  // Write your code here
  const denominator = arr.length;
  let obj = {
    positive: 0,
    zero: 0,
    negative: 0,
  };

  for (let i = 0; i < denominator; i++) {
    if (arr[i] > 0) {
      obj.positive++;
    }
    if (arr[i] === 0) {
      obj.zero++;
    }
    if (arr[i] < 0) {
      obj.negative++;
    }
  }
  // .toFixed(6)
  console.log((obj.positive / denominator).toFixed(6));
  console.log((obj.negative / denominator).toFixed(6));
  console.log((obj.zero / denominator).toFixed(6));
}
