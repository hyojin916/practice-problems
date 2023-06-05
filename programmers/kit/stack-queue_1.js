/**
 * TODO: 다시 풀기
 * 정확성: 27.3
 * 합계: 27.3 / 100.0
 *
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 *
 *  */

function solution(progresses, speeds) {
  // 1. progresses의 각 요소를 100에서 뺀 배열 A를 만든다.
  const restProgress = progresses.map((task, idx) => 100 - task);

  // 2. A배열의 각 요소를 speeds로 나눠서 남은 일수 배열 B를 만든다.
  const restDays = restProgress.map((restTask, idx) =>
    Math.ceil(restProgress[idx] / speeds[idx])
  );
  console.log('restProgress', restProgress, 'restDays', restDays);

  // 3. B배열을 순회하며 이전 값i가 i+1 보다 작으면 stack에 넣고, 그렇지 않으면 stack에서 뺀 갯수를 새로운 배열 C에 push 한다.
  let stack = [];
  const res = [];

  for (let i = 0; i < restDays.length; i++) {
    stack.push(restDays[i]);

    if (restDays[i] < restDays[i + 1]) {
      res.push(stack.length);
      stack = [];
    }
    if (i === restDays.length - 1) {
      console.log('마지막', i, stack);
      res.push(stack.length);
    }
  }

  return res;
}
