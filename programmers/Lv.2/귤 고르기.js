// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  let counter = 0;
  // 1. map으로 저장 -> 이중 배열로
  const map = new Map();
  for (const item in tangerine) {
    // let 써야된다. -> index 안쓰니까 of 쓰셈
    let now = tangerine[item];
    map.has(now) ? map.set(now, map.get(now) + 1) : map.set(now, 1);
  }

  // 1. 이중 배열로 갯수를 저장한다. [[1, 1], [2, 2] ... [6, 1]] + 요소 중 2번째를 기준으로 내림차순 sorting
  let sortArr = [];
  map.forEach((val, key) => {
    sortArr.push([key, val]);
  });
  sortArr.sort((a, b) => b[1] - a[1]);

  // 3. k개 만큼 for문을 돌면서 몇 개의 종류를 거쳤는지 count++한다.
  for (let i = 0; i < sortArr.length; i++) {
    counter = sortArr[i][1] + counter;
    if (counter >= k) {
      return i + 1;
    }
  }
}
