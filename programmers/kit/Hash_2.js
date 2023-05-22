/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 *
 * 배운 점
 * ⭐️ array를 sorting해주는 것이 아니라, 빈도수가 들어간 map을 array로 만든 뒤에 <빈도수를 기준으로 sorting해줘야 한다.>
 *  */

// completion.길이 === participant.길이 - 1
// 1. Map(): participant의 name : 1 (key-value) 형식으로 Map을 만든다. - 동명이인도 value+ 1
// 2. completion를 돌며 위 Map에 name에 따라 "value - 1"
// 3. 최종 Map에서 value가 1인 값을 return
function solution(participant, completion) {
  const map = new Map();

  participant.forEach((elem) => {
    map.has(elem) ? map.set(elem, map.get(elem) + 1) : map.set(elem, 1);
  });

  completion.forEach((name) => {
    map.set(name, map.get(name) - 1);
    if (map.get(name) === 0) map.delete(name);
  });

  const loser = map.keys(); // keys = Array.from(map.keys()) 하고 return keys[0] 이케해도 댐
  return loser.next().value;
}

// 20분 - 난이도 쉬움

// 정확성: 58.3;
// 효율성: 41.7;
// 합계: 100.0 / 100.0;
