function solution(phone_book) {
  if (phone_book.length < 2) return true;
  // 1. phone_book을 돌면서 앞에 2자리를 잘라 key, 0을 value로 둔다.
  const map = new Map();
  for (let i = 0; i < phone_book.length; i++) {
    const a = phone_book[i].slice(0, 2);
    if (map.has(a)) {
      map.set(a, map.get(a) + 1);
    } else {
      map.set(a, 0);
    }
  }
  console.log('map', map);
  let arr = [];
  map.forEach((item) => {
    console.log(item);
    if (item > 0) arr.push(item);
  });
  if (arr.length > 0) {
    return false;
  } else {
    return true;
  }
  // 2. map에서 value가 1인 key가 있으면 false, 아니면 true teturn.
}
