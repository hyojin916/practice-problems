// * 조건을 보면 시간초과가 날수밖에없음. Map으로 다시 풀기

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
