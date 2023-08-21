// https://school.programmers.co.kr/learn/courses/30/lessons/42746#

function solution(numbers) {
  const set = new Set(numbers);
  if (set.size === 1 && set.has(0)) return '0';

  // 값이 비교하는 값보다 크면 1, 아니면 -1
  const sortArr = numbers
    .map(String)
    .sort((a, b) => (b + a).localeCompare(a + b));
  const string = sortArr.join('');

  return string;
}
