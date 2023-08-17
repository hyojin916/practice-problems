/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587
 * * arr.sort();는 원본 배열의 요소들을 정렬하여 원본 배열을 변경하는 메서드이다.
 * * 따라서 기존 배열에 대해 얕은복사를 arr.slice() 해준 뒤 sort 해줘야 원본 배열이 변하지 않는다.
 */
function solution(priorities, location) {
  let count = 1;
  const sortArr = priorities.slice(); // https://ko.javascript.info/task/copy-sort-array

  // value와 index를 모두 저장하는 이중 배열로 바꾼다.
  priorities.map((elem, idx) => (priorities[idx] = [elem, idx]));
  sortArr.sort((a, b) => b - a);

  const findValue = priorities[location][1];
  while (priorities.length > 0) {
    if (sortArr[0] === priorities[0][0]) {
      if (priorities[0][1] === findValue) return count; // 답이 맞을 때
      priorities.shift();
      sortArr.shift();
      count++;
    } else {
      // 뒤로 보내는 과정
      priorities.push(priorities[0]);
      priorities.shift();
    }
  }
  return;
}
