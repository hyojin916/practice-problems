// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function recursive(arr, set) {
  for (let i = 0; i < arr.length; i++) {
    // 0, 1, 2, 3, 4
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[(i + j) % arr.length];
      // console.log(i, j,'->', arr[(i + j) % arr.length], sum)
      set.add(sum);
    }
  }
}
// 	[7, 9, 1, 1, 4]
function solution(elements) {
  let answer = 0;
  let set = new Set();
  // 1. elements의 길이(l)을 돌면서 1~leng 까지 나오는 합을 set에 넣는다.
  recursive(elements, set);

  return set.size;
}
