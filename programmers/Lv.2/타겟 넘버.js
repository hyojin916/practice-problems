// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  // [4, 1, 2, 1], 4
  let answer = 0;
  dfs(numbers, 0, target, 0);

  return answer;

  function dfs(numbers, depth, target, result) {
    if (depth === numbers.length) {
      if (target === result) {
        // console.log('OK')
        answer++;
      }
      // console.log(depth, result)
      return;
    }
    const plus = result + numbers[depth];
    const minus = result - numbers[depth];

    dfs(numbers, depth + 1, target, plus);
    dfs(numbers, depth + 1, target, minus);
  }
}
