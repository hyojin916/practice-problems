// https://school.programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
  let answer = [];
  for (let i = 0; i < operations.length; i++) {
    const arr = operations[i].split(' ');
    if (arr[0] === 'I') {
      answer.push(Number(arr[1]));
      answer.sort((a, b) => a - b);
    } else {
      arr[1] === '1' ? answer.pop() : answer.shift();
    }
  }
  return answer.length === 0 ? [0, 0] : [answer[answer.length - 1], answer[0]];
}
