/* * 
https://school.programmers.co.kr/learn/courses/30/lessons/12941
난이도: 1

1. sort method는 배열 자체를 sorting해서 A, B를 그대로 사용해도 된다.
2. 누적 값을 구할 때 reduce를 사용하여 코드를 줄일 수 있음
const array1 = [1, 2, 3, 4];
const initialValue = 0;
* const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
*/

function solution(A, B) {
  let answer = 0;
  // 0. A, B의 길이가 0일때 return answer.
  if (A.length < 1) return answer;

  // 1. A는 오름차순, B는 내림차순으로 sorting한다.
  const newA = A.sort((a, b) => a - b);
  const newB = B.sort((a, b) => b - a);

  // 2. for - A배열의 길이를 돌며 각 index 값끼리 곱해준다.
  // 2-1. 반복문이 끝날 때 까지 곱한 값을 answer에 더한다.
  for (let i = 0; i < A.length; i++) {
    const times = newA[i] * newB[i];
    answer = answer + times;
  }

  // 3. return
  return answer;
}
// 정확성: 69.6;
// 효율성: 30.4;
// 합계: 100.0 / 100.0;

function solution2(A, B) {
  let answer = 0;
  if (A.length < 1) return answer;

  // * 1. A는 오름차순, B는 내림차순으로 sorting한다.
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  // * 2. for => reduce
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
// 정확성: 69.6;
// 효율성: 30.4;
// 합계: 100.0 / 100.0;
