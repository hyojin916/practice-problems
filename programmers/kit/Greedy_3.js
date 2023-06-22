// TODO: 틀림
function solution(number, k) {
  // 1. number 각 자리를 을 배열로 바꾼다.
  const numToStringToSortedArr = number
    .toString()
    .split('')
    .sort((a, b) => a - b);

  const hi = numToStringToSortedArr.splice(k, number.length);
  const bye = numToStringToSortedArr.splice(0, k + 1);

  console.log('bye', bye);
  // 2. for문을 돌면서 맨뒤에 빼고 가장 큰 값과 그 값의 index(같으면 앞에있는거)를 저장. -> 십의자리 수

  const yes = [];

  for (let i = 0; i < number.length; i++) {
    if (bye.includes(number[i])) {
      // bye.shift();
      bye.splice(bye.indexOf(number[i]), 1);
      console.log(number[i] + '는 제거한다.' + '->' + bye);
    } else {
      console.log(number[i] + '는 살린다.');
      yes.push(number[i]);
    }
  }

  console.log(yes);
  return yes;
}

// *
function solution(number, k) {
  var stack = []; // b : 최종 글자들이 저장될 스택 (숫자가 큰!)
  for (var i = 0; i < number.length; i++) {
    // 모든 숫자 비교
    var now = number[i]; // 현재 인덱스 숫자. 처음에는 그냥 push

    // 무조건 push 하고 다음 for 문에서 이전인덱스 숫자와 나랑 비교해서 현재인덱스가 이전인덱스보다 크면 pop하고 넣어줌. 제거하는 숫자인 (k)를 1 감소
    // 제거할 숫자를 다 채웠으면 그냥 넣음
    while (k > 0 && stack[stack.length - 1] < now) {
      stack.pop();
      k--;
    }
    stack.push(now);
  }
  // k가 0일 경우 스택은 그대로,
  // but k가 남아있으면 뒤에서부터 제거해준다. (ex. 1010,2 -> 11)
  while (k > 0) {
    stack.pop();
    k--;
  }
  const answer = stack.join('');

  return answer;
}
