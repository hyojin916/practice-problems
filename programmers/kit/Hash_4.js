// * https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  // 1. map으로 의상 정리
  const map = new Map();
  for (let i = 0; i < clothes.length; i++) {
    let type = clothes[i][1];
    let value = map.get(type);
    if (map.has(type)) {
      map.set(type, value + 1);
    } else {
      map.set(type, 1);
    }
  }

  let arr = [];
  map.forEach((value, key) => {
    arr.push(value + 1);
  });

  console.log('arr', arr);
  const answer = arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
  return answer - 1; // 0 0 0 의 경우
}
