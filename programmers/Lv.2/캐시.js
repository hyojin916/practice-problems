// https://school.programmers.co.kr/learn/courses/30/lessons/17680#
// * 캐시 교체 알고리즘은 LRU(Least Recently Used) - Linked List의 개념과 연관

// * 빈번하게 일어나는거를 push pop을 사용하고, 덜 빈번한 것을 shift, unshift를 사용하면 성능에 더 좋을 수 있다.

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  let time = 0;
  cities = cities.map((el) => el.toLowerCase().trim());
  const cacheArr = new Array(cacheSize);
  cacheArr.fill(0);

  // cities를 돌면서 cacheArr안에 요소가 있으면 hit (+1) 없으면 miss (+5)
  for (let i = 0; i < cities.length; i++) {
    if (cacheArr.includes(cities[i])) {
      time++;
      const where = cacheArr.indexOf(cities[i]);
      cacheArr[where] = cities[i];
      cacheArr.splice(where, 1);
    } else {
      time = time + 5;
      cacheArr.pop(); // 맨 뒤 제거
    }
    cacheArr.unshift(cities[i]);
  }
  return time;
}

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  let time = 0;
  cities = cities.map((el) => el.toLowerCase().trim());
  const cacheArr = new Array(cacheSize);
  cacheArr.fill(0);

  // cities를 돌면서 cacheArr안에 요소가 있으면 hit (+1) 없으면 miss (+5)
  for (let i = 0; i < cities.length; i++) {
    if (cacheArr.includes(cities[i])) {
      time++;
      const where = cacheArr.indexOf(cities[i]);
      cacheArr[where] = cities[i];
      cacheArr.splice(where, 1);
    } else {
      time = time + 5;
      cacheArr.shift();
    }
    cacheArr.push(cities[i]); //  * refactor
  }
  return time;
}
