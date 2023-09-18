// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function isPrime(num) {
  if (num < 2) return 0;
  if (num === 2) return 1;
  const mid = Math.sqrt(num); // 효율성
  for (let i = 2; i <= mid; i++) {
    if (num % i === 0) return 0;
  }
  return 1;
}
function solution(n, k) {
  let answer = 0;
  n = n.toString(k);
  // 0으로 자르기
  const arr = n.split(0);
  for (let i = 0; i < arr.length; i++) {
    const val = isPrime(arr[i]);
    answer = val + answer;
  }

  return answer;
}
