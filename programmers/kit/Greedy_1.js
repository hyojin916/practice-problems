/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862#
 *
 * 배운 점
 * 1. 배열을 순회하게 되면 sorting을 해준다.
 * 2. 문제를 읽고 예외의 경우를 먼저 제거해준다.
 * -> 이 경우 reserve와 lost에서 중복되는 경우에 reserve 배열을 시작할 때 줄여줌.
 *  */

function solution1(n, lost, reserve) {
  // 1. 체육복을 입을 수 있는 최소의 사람들
  let startValue = n - lost.length;

  // 2. reserve와 lost를 돌면서 각 배열의 가장 첫번째 요소가 매칭되면 pop하고 + 'startValue+1'을 한다.
  // lost의 length가 0이되면 startValue를 return한다.
  for (i = 0; i < reserve.length; i++) {
    let reserver = reserve[i];
    let front = reserve[i] - 1;
    let back = reserve[i] + 1;
    if (lost.includes(reserver[i])) {
      startValue = startValue - 1;
    }
    console.log(reserver + '>' + front + ',' + back);
    if (lost.includes(front)) {
      startValue = startValue + 1;
      lost.pop(lost[0]);
    }
    if (lost.includes(back)) {
      startValue = startValue + 1;
      lost.pop(lost[1]);
    }
  }
  console.log(lost);
  return startValue;
}

solution1(5, [2, 4], [1, 3, 5]);

// 정확성: 60.0
// 합계: 60.0 / 60.0;

function solution2(n, lost, reserve) {
  let answer = n - lost.length;
  // *sorting하여 배열이 순회하면서 빌려주지 못하는 경우를 지운다.
  lost.sort();
  reserve.sort();
  // 1. "도난 당했지만 여벌이 있는 학생"은 빌릴 필요가 없기 때문에 lost, reserve 모두에서 제외시켜 빌려주는 상황을 없앤다.
  lost = lost.filter((lostNum) => {
    let lostButReserveIdx = reserve.findIndex(
      (reserveNum) => reserveNum === lostNum
    );

    if (lostButReserveIdx === -1) {
      console.log('일치 x ', lostNum);
      return lostNum;
    } else {
      // lost 이면서 reserve이면 reserve에서 제외
      console.log('reserve이면 reserve', lostButReserveIdx);

      reserve.splice(lostButReserveIdx, 1);
      answer++; // * 나 자신에게 나눠줬으니까 +1
    }
  });

  // 2. lost 에 도난을 당했고, 여벌도 없는 학생들만 남긴 후 순회하며 빌려준 후 -> 빌려주면 reserve에서 제외
  lost.filter((lostNum) => {
    let lostIdx = reserve.findIndex(
      (reserveNum) => Math.abs(lostNum - reserveNum) === 1
    );

    if (lostIdx === -1) {
      return lostNum;
    } else {
      reserve.splice(lostIdx, 1);
      answer++;
    }
  });

  return answer;
}

// 정확성: 100.0
// 합계: 100.0 / 100.0;

solution2(5, [2, 4], [1, 3, 5]);
