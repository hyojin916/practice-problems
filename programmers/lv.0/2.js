/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120812
 *
 * 배운 점
 * ⭐️ array를 sorting해주는 것이 아니라, 빈도수가 들어간 map을 array로 만든 뒤에 <빈도수를 기준으로 sorting해줘야 한다.>
 *  */

function solution(array) {
  let map = new Map();

  array.forEach((elem) => {
    if (map.has(elem)) {
      map.set(elem, map.get(elem) + 1);
    } else {
      map.set(elem, 1);
    }
  });
  const maxArr = [...map.entries()].sort((a, b) => b[1] - a[1]);

  let maxKey = maxArr[0][0]; // 첫 값의 key
  let maxValue = maxArr[0][1]; // 첫 값의 value

  for (let i = 1; i < maxArr.length; i++) {
    if (maxValue < maxArr[i][1]) {
      maxKey = maxArr[i][0];
      maxValue = maxArr[i][1];
    } else if (maxValue === maxArr[i][1]) {
      return -1;
    }
  }

  return maxKey;
}

// * 리팩토링

function solution(array) {
  let map = new Map();

  // * 1. if else -> 삼항연산자
  array.forEach((elem) => {
    map.has(elem) ? map.set(elem, map.get(elem) + 1) : map.set(elem, 1);
  });

  const maxArr = [...map.entries()].sort((a, b) => b[1] - a[1]);

  // * 2. 빈도수가 높은 순으로 sorting을 해줬기 때문에
  // * 1) 순회 필요없이 첫번째와 두번째 key-value들 끼리만 비교해준다.
  // * 2) if -> 삼항연산자

  return maxArr.length === 1 || maxArr[0][1] > maxArr[1][1] ? maxArr[0][0] : -1;
}
