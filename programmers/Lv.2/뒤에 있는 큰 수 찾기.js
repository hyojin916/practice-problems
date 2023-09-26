// https://school.programmers.co.kr/learn/courses/30/lessons/154539#qna

function solution(numbers) {
  const stack = [];
  const answer = Array(numbers.length).fill(-1);

  for (let i = numbers.length - 1; i >= 0; i--) {
    while (stack.length !== 0 && numbers[i] >= stack.at(-1)) {
      // 필요 없는 것 뻭;
      stack.pop();
    }
    if (stack.length !== 0) {
      answer[i] = stack.at(-1);
    }
    stack.push(numbers[i]);
  }
  return answer;
}

// -> 시간초과

// function solution(numbers) {
//     let answer = [];
//     for (let i = 0; i < numbers.length; i++) {
//         const now = numbers[i];
//         let larges = [];
//         for (let j = i+1; j < numbers.length; j++) {
//             if (now < numbers[j]) larges.push(numbers[j])
//         }
//         larges.length < 1 ? answer.push(-1) : answer.push(larges[0])
//     }
//     return answer;
// }
