// https://school.programmers.co.kr/learn/courses/30/lessons/42584#

// * 뒤에 있는 큰 수 찾기 문제때문에 뒤에서부터 돌다가 오히려 어렵게 생각해버럈다.
// 제한 사항: 주식가격은 2 이상 100,000 이하, 큰 수 찾기는 4 ≤ numbers의 길이 ≤ 1,000,000라서 그런 듯

function solution(prices) {
  let answer = Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] >= prices[i]) {
        answer[i]++;
      } else {
        answer[i]++;
        break;
      }
    }
  }
  return answer;
}

// * 틀림
function solution(prices) {
  let answer = Array(prices.length).fill(0);
  // 뒤에 가격이 있으면 기본적으로 +1초 - 다다음꺼부터가 내려간지 확인
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] >= prices[i]) {
        answer[i]++;
      } else {
        return;
      }
    }
  }
  return answer;
}

// 초는 prices.length
