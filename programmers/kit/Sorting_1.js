/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 *
 * 배운 점
 * ⭐️ 문제에 나오는 변수 명(i, j, k ...)과 for 문에서 자주 쓰이는 i 와 같은 변수명 선언을 주의하자.
 * ⭐️ array 문제에서 index와 자릿수를 잘 구별하기
 * 문제가 쉽기도 했지만 계획을 잘 세우고 하니까 잘되었다.
 *  */

// 1. 자르기 commands=[[i, j , k], [i, j , k], ...]
// 2. 정렬
// 3. k 번째

function solution(array, commands) {
  var answer = [];
  // 1. for 문은 commands.length를 기준으로 돈다.
  for (let a = 0; a < commands.length; a++) {
    // 1-0. command 배열을 정의한다. -> [i, j, k] // i, j는 index가 아니라 자리수임.
    let command = commands[a];
    const i = command[0];
    const j = command[1];
    const k = command[2];

    // 1-1. command 안에서 배열을 1) 자르고, 2)정렬한다.
    let sliceArr = array.slice(i - 1, j);
    sliceArr.sort((a, b) => a - b);

    // 1-2. indexOf k를 answer에 push 한다. // k는 index가 아니라 자리수이다.
    const answerItem = sliceArr[k - 1];

    answer.push(answerItem);
  }

  return answer;
}

// 정확성: 100.0
// 합계: 100.0 / 100.0
