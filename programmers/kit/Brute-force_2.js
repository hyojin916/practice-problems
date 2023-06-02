// TODO 틀림

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840
 *  */

// * 1, 2, 3 번을 모두 10000개 비교하는 것은너무한데?
// 맞춘 문제의 갯수를 구해야 한다.
// for문을 3개 돌린다. 3n
const one = [1, 2, 3, 4, 5];
const two = [2, 1, 2, 3, 2, 4, 2, 5];
const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function solution(answers) {
  const oneNum = Math.floor(one.length / answers.length);
  const twoNum = Math.floor(two.length / answers.length);
  const threeNum = Math.floor(three.length / answers.length);

  const oneRemain = answers.length % one.length;
  const twoRemain = answers.length % two.length;
  const threeRemain = answers.length % three.length;

  let oneRes = 0;
  for (let i = 0; i < oneNum; i++) {
    for (let j = 0; j < one.length; j++) {
      if (oneNum[i] === one[j]) {
        oneRes = oneRes + 1;
      }
    }
  }

  let twoRes = 0;
  for (let i = 0; i < twoNum; i++) {
    for (let j = 0; j < two.length; j++) {
      if (twoNum[i] === two[j]) {
        twoRes = twoRes + 1;
      }
    }
  }

  let threeRes = 0;
  for (let i = 0; i < threeNum; i++) {
    for (let j = 0; j < three.length; j++) {
      if (threeNum[i] === three[j]) {
        threeRes = threeRes + 1;
      }
    }
  }
  console.log(oneRes, twoRes, threeRes);
}
