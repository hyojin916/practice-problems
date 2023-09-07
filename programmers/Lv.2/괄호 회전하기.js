// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function replace(replaceArr) {
  replaceArr.map((item, idx) => {
    if (item === '(') replaceArr[idx] = -1;
    if (item === ')') replaceArr[idx] = 1;
    if (item === '{') replaceArr[idx] = -2;
    if (item === '}') replaceArr[idx] = 2;
    if (item === '[') replaceArr[idx] = -3;
    if (item === ']') replaceArr[idx] = 3;
  });
  return replaceArr;
}

function isCorrect(arr) {
  // 절댓값이 같으면 pop()
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      stack.push(arr[i]);
    } else if (arr[i] > 0) {
      if (stack.length === 0 || stack.pop() !== -arr[i]) return false;
    }
  }
  return stack.length === 0;
}

function solution(s) {
  let answer = 0;
  let sArr = s.split('');
  const nums = replace(sArr);

  for (let i = 0; i < sArr.length; i++) {
    const counter = isCorrect(sArr);
    answer = counter + answer; // 0이든 1이든 더한다.
    const first = sArr.shift();
    sArr.push(first);
  }
  return answer;
}
