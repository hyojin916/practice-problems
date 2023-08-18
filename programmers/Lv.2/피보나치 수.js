/* * https://school.programmers.co.kr/learn/courses/30/lessons/12945
 * todo: 시간 초과로 모듈러 연산 사용해야 함
 */

function solution(n) {
  if (n <= 1) {
    //1번째, 2번째 피보나치 수(0,1)
    return n;
  }

  return (solution(n - 1) + solution(n - 2)) % 1234567;
}

// 정확성: 42.9;
// 합계: 42.9 / 100.0;
