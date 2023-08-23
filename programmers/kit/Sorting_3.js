function solution(citations) {
  const set = new Set(citations);
  if (set.size === 1 && set.has(0)) {
    return 0;
  }
  // 1. 정렬을 한다.
  let answer = 0;
  citations.sort((a, b) => b - a);

  // 2. 가운데 값을 h로 찾는다.
  for (let h = 0; h < citations.length; h++) {
    console.log(citations[h], h);
    if (citations[h] <= h) {
      return h;
    }
  }
  return citations.length;
}
