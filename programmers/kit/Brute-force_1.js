/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/86491
 *
 * 배운 점
 * for문을 돌며 마지막 값을 추출해서 사용해야 할때 무조건 length -1을 사용하지 않도록 유의한다.
 *  */

function solution(sizes) {
  // 1. 배열을 돌며, 명함 가로/세로를 sorting한다.
  for (let i = 0; i < sizes.length; i++) {
    sizes[i] = sizes[i].sort((a, b) => a - b);
  }

  // 2. 다시 배열을 돌며, w의 Max와 h의 Max를 알아낸다.
  let maxW = 0;
  let maxH = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (maxW < sizes[i][0]) maxW = sizes[i][0];
    if (maxH < sizes[i][1]) maxH = sizes[i][1];
  }
  // 3. 각 Max를 곱하여 return 한다
  return maxW * maxH;
}

// 12분 30초 - 난이도 쉬움
