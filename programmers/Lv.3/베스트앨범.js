// https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  let answer = [];
  const map = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (map.has(genres[i])) {
      map.set(genres[i], [...map.get(genres[i]), [i, plays[i]]]);
    } else {
      map.set(genres[i], [[i, plays[i]]]);
    }
  }
  const countMap = new Map();
  map.forEach((val, key) => {
    countMap.set(
      key,
      val.reduce((a, b) => a + b[1], 0)
    );
    const slice = map
      .get(key)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2);
    map.set(key, slice);
  });
  const arr = Array.from(countMap)
    .sort((a, b) => a[1] - b[1])
    .sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i][0])) {
      let loopArr = map.get(arr[i][0]);

      if (loopArr.length === 1) {
        answer.push(loopArr[0][0]);
      } else {
        if (loopArr[0][0] === loopArr[1][0]) {
          loopArr.sort((a, b) => {
            a[0][0] - b[0][0];
          });
        }
        answer.push(loopArr[0][0]);
        answer.push(loopArr[1][0]);
      }
    }
  }
  return answer;
}
