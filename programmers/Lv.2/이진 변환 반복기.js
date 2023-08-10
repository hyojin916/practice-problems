function solution(s) {
  let answer = [0, 0];
  let sLen = 0;

  while (s.length > 1) {
    // 1. sLen = s의 길이를 할당해준다.
    sLen = s.length;

    // 2. s = s에서 1만 남겨준다.
    s = s.split('0').join('');
    // 2-1. 0의 갯수를  answer[1]에 누적으로 더해준다.
    answer[1] += sLen - s.length;
    // 2-2. 이진 변환한 갯수를 answer[0]에 누적으로 더해준다.
    answer[0]++;

    // 3. s 이진법으로 바꿔 s에 할당한다.
    s = s.length.toString(2);
  }
  return answer;
}

// * 재귀로 풀다가 틀린것
const change = (num, counter, zeroNums) => {
  // base case. num === 1 이면 return [n, m];
  if (num == 1) return [counter, zeroNums];

  // 1. num의 길이를 돌면서 0을 제거하고 counter에 갯수를 더한다.
  const stringArr = num.split('');
  let zeroStack = [];
  let oneStack = [];
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] == '0') {
      zeroStack.push(stringArr[i]);
    } else {
      oneStack.push(stringArr[i]);
    }
  }

  zeroNums = zeroNums + zeroStack.length;
  counter++;

  const newNum = oneStack.join('');
  const binary = Number(newNum).toString(2).length;
  console.log(binary);
  const ten = binary.toString(2);
  console.log(ten.toString());
  return change(ten, counter, zeroNums);
};

function solution(s) {
  let counter = 0;
  let zeroNums = 0;
  let initialNum = s;

  // 이진 변환 함수

  return change(initialNum, counter, zeroNums);
}
