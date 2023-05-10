// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(arr) {
  // * array의 중앙 값을 구한다 ( 0 < arr.length < 100) ==> 예외처리 필요없음

  // 1. sort
  arr.sort((a, b) => a - b);

  // 2. 나누기 (몫) 사용하여 가운데 값의 index를 구한다.
  const middleIdx = Math.floor(arr.length / 2);
  return arr[middleIdx];
}
