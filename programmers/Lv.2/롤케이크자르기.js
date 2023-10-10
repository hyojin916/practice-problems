// https://school.programmers.co.kr/learn/courses/30/lessons/132265
// * 처음 풀었던 방법 (Slice, Set)은 for 문을 돌면서 계속 재할당해주게 되어 메모리 초과.
// * Map으로 풀며 형의 토핑을 동생에게 주는 방식으로 해결

function solution(topping) {
  let answer = 0;

  let me = new Map();
  let bro = new Map();

  for (elem of topping) {
    me.has(elem) ? me.set(elem, me.get(elem) + 1) : me.set(elem, 1);
  }

  for (let i = 0; i < topping.length; i++) {
    const item = topping[i];
    me.set(item, me.get(item) - 1);
    bro.has(item) ? bro.set(item, me.get(item) + 1) : bro.set(item, 1);

    if (me.get(item) === 0) me.delete(item);
    if (me.size === bro.size) answer++;
  }
  return answer;
}

// * 조건(제한사항)을 보면 시간초과가 날수밖에없음. Map으로 다시 풀기
// 제한사항
// 1 ≤ topping의 길이 ≤ 1,000,000
// 1 ≤ topping의 원소 ≤ 10,000
function solution(topping) {
  let answer = 0;
  let a = [];
  let b = [...topping];

  for (let i = 0; i < topping.length; i++) {
    a.push(topping[i]);
    b.shift();
    let aSet = new Set(a);
    let bSet = new Set(b);

    if (aSet.size === bSet.size) {
      answer++;
    }
  }
  return answer;
}

function solution(topping) {
  let answer = 0;

  for (let i = 1; i < topping.length; i++) {
    let a = topping.slice(0, i);
    let b = topping.slice(i);
    let aSet = new Set(a);
    let bSet = new Set(b);

    if (aSet.size === bSet.size) {
      answer++;
    }
  }
  return answer;
}
