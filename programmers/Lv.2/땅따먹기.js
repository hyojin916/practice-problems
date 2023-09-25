// * https://school.programmers.co.kr/learn/courses/30/lessons/12913#

function solution(land) {
  let answer = 0;
  const arr = [];
  // land만큼 돌면서 이전 index를 제외한 값으로 또 돈다.
  for (let i = 1; i < land.length; i++) {
    // console.log( 'prev', i, ':', land[i][0], land[i][1], land[i][2], land[i][3])
    land[i][0] =
      Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]) + land[i][0];
    land[i][1] =
      Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]) + land[i][1];
    land[i][2] =
      Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]) + land[i][2];
    land[i][3] =
      Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]) + land[i][3];
    // console.log( i, ':', land[i][0], land[i][1], land[i][2], land[i][3])
  }

  answer = Math.max(...land[land.length - 1]);
  // console.log(answer)
  return answer;
}
