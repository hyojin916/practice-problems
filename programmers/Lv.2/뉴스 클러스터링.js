// https://school.programmers.co.kr/learn/courses/30/lessons/17677#

function solution(str1, str2) {
  if (!str1 && !str2) return 65536;
  let answer = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let A = [],
    B = [];
  const re = /[^a-z]/;

  for (let i = 0; i < str1.length - 1; i++) {
    let s = str1.slice(i, i + 2);
    const res = re.test(s);
    if (!res) A.push(s);
  }
  for (let i = 0; i < str2.length - 1; i++) {
    let s = str2.slice(i, i + 2);
    const res = re.test(s);
    if (!res) B.push(s);
  }
  if (A.length < 1 && B.length < 1) return 65536;

  let intersection = 0;
  let union = 0;
  for (let i = 0; i < A.length; i++) {
    if (B.includes(A[i])) {
      B.splice(B.indexOf(A[i]), 1);
      intersection++; // B에서 뺀 갯수만큼 더함
    }
  }

  union = A.length + B.length;
  if (intersection === 0 && union === 0) return 65536;
  answer = Math.floor((intersection / union) * 65536);

  return answer;
}
