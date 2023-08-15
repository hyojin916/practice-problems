function addPrev(num) {
  if (num === 1) return 1;
  return num + addPrev(num + 1);
}

function solution(n) {
  let answer = 0;
  console.log('n/2', Math.ceil(n / 2));
  for (let i = 0; i < Math.ceil(n / 2) + 1; i++) {
    for (let j = 0; j < i; j++) {
      let sum = 0;
      sum = addPrev(i);
      console.log('i', i, j, sum);
    }
  }
  return answer - 1;
}
