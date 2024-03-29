// TODO: 틀림

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42860#
 */

const alphabetMap = new Map();
const alphabetArr = Array.from({ length: 26 }, (v, i) =>
  String.fromCharCode(i + 65)
);

alphabetMap.set('A', 0);
for (let i = 1; i < 13; i++) {
  alphabetMap.set(alphabetArr[i], i);
}
let count = 0;
for (let i = 25; i > 12; i--) {
  count = count + 1;
  alphabetMap.set(alphabetArr[i], count);
}

// 1. 상하 이동 줄이기
// name을 순회하며 알파벳을 찾는다.
// 1-1. 알파벳 M 까지 검색할 때는 up, N 까지 검색할 때는 down

function solution(name) {
  let counter = 0;
  // 1. name String -> Arr
  const nameArr = name.split('');

  // 2. 좌우 이동 줄이기
  // 2-1. 마지막 글자가 A 일때 Next 하지않는다.
  // 2-2. 첫 번째, 마지막 글자만 A 일때 거꾸로 간다.
  let ACounter = nameArr.filter((alpabet) => alpabet === 'A');
  if (nameArr.length === 1) return alphabetMap.get(nameArr[0]);

  if (
    ACounter.length === nameArr.length - 2 &&
    nameArr[0] !== 'A' &&
    nameArr[nameArr.length - 1] !== 'A'
  ) {
    console.log('으으아');
    return (
      alphabetMap.get(nameArr[0]) +
      alphabetMap.get(nameArr[nameArr.length - 1]) +
      1
    );
  }

  for (let i = 0; i < nameArr.length; i++) {
    if (nameArr[i] !== 'A') {
      counter = counter + alphabetMap.get(nameArr[i]);
    }
    if (nameArr.length - 1 !== i) {
      counter++;
    }
  }

  return counter;
}

// 3.

// length-1까지 돌면서 횟수를 더한다.
// index 0을 기준으로 index 1, index [length-1] 중에 A가 있는지 확인한다.
// index가 [length-1]인 경우가 아니면 순차적으로 돈다. (length -1 까지)
// index가 [length-1]인 경우 거꾸로 돌며 (index 1 까지)
function solution(name) {
  let answer = 0;

  let lastIdx;
  let secondIdx;
  if (name.length > 1) {
    lastIdx = name.length - 1;
    secondIdx = 1;
  }

  if (
    !!lastIdx &&
    !!secondIdx &&
    lastIdx > secondIdx &&
    name[secondIdx] !== 'A'
  ) {
    answer = answer + name.length - 1;
    for (let i = 0; i < name.length; i++) {
      answer = answer + alphabetMap.get(name[i]);
      console.log('for 1:', name[i], alphabetMap.get(name[i]));
    }
    return answer;
  } else {
    answer = answer + name.length - 1;
    answer = answer - 1;
    for (let i = name.length - 1; i > -1; i--) {
      answer = answer + alphabetMap.get(name[i]);
      console.log('for 2:', name[i], alphabetMap.get(name[i]));
    }
    return answer;
  }
}
