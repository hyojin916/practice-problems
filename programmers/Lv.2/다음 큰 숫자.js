//* https:school.programmers.co.kr/learn/courses/30/lessons/12911
/**
 * * ⭐️ while loop에 true로 조건을 주면 무한 루프를 만들 수있다.
 * * 다만 break를 걸어줘야한다
 * Use the break statement to stop a loop before condition evaluates to true.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 */
function solution(n) {
  // 1. 노가다의 방법 n(78)을 이진수로 바꾼 뒤, 1의 갯수를 세서 a 저장.

  const oneCounter = n.toString(2).split(0).join('').length;

  // 2. n + 1을 해가면서 n+1의 이진수의 1의 갯수가 a와 같으면 그 값을 반환 - 무한 loop 사용
  while (true) {
    n++;
    const nextCounter = n.toString(2).split(0).join('').length;
    if (oneCounter === nextCounter) {
      return n; // break
    }
  }
  // console.log('nextNum', nextNum)
  // return nextNum[0];
}

// * 처음 틀린 방법 - 시간초과
// function solution(n) {
//   // 1. 노가다의 방법 n(78)을 이진수로 바꾼 뒤, 1의 갯수를 세서 a 저장.

//   const oneCounter = n.toString(2).split(0).join('').length;
//   let nextNum = [n + 1, 0]; // number , 1갯수

//   while (nextNum[1] !== oneCounter) {
//     let next = nextNum[0] + 1;
//     nextNum[0] = next; // 다음으로
//     nextNum[1] = next.toString(2).split(0).join('').length;
//     console.log('while nextNum', nextNum);
//     if (nextNum[1] == oneCounter) {
//       return nextNum[0];
//     }
//   }
//   console.log('nextNum', nextNum);
//   return nextNum[0];
// }
