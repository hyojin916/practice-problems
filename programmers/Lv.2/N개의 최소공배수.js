// https://school.programmers.co.kr/learn/courses/30/lessons/12953
// 최대공약수함수 - gcd
// 최대공약수들 - gcdMultipleNumbers

function gcd(x, y) {
  while (y !== 0) {
    let temp = y; // 다음 분모
    y = x % y;
    x = temp;
  }
  return x;
}

// 최소공배수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  var answer = arr[0];

  for (i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  //     function gcdMultipleNumbers(arr) {
  //         let res = arr[0]
  return answer;
}

// module.exports = solution;
