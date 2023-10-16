// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  let answer = 0;

  const map = new Map();
  for (let i = 0; i < want.length; i++) {
    map.set(want[i], number[i]);
  }
  const buyLength = number.reduce((a, b) => a + b);

  for (let i = 0; i < discount.length - 9; i++) {
    const tempArr = discount.slice(i, i + 10);
    const tempMap = new Map(map);
    for (let j = 0; j < tempArr.length; j++) {
      if (tempMap.has(tempArr[j])) {
        tempMap.set(tempArr[j], tempMap.get(tempArr[j]) - 1);
        if (tempMap.get(tempArr[j]) === 0) {
          tempMap.delete(tempArr[j]);
        }
      } else {
        break;
      }
      if (tempMap.size === 0) {
        answer++;
      }
    }
  }

  return answer;
}
