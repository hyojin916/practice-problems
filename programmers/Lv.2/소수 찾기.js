function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // 소수를 판별하는 과정을 최적화하기 위한 방법 중 하나
    if (n % i === 0) return false;
  }
  return true;
}
function recursive(set, arr, current) {
  if (arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      let newCurrent = current + arr[i];
      let copyArr = [...arr];

      copyArr.splice(i, 1);

      if (isPrime(parseInt(newCurrent))) {
        set.add(parseInt(newCurrent));
      }

      recursive(set, copyArr, newCurrent);
    }
  }
}
function solution(numbers) {
  let nums = numbers.split('');
  let set = new Set();

  recursive(set, nums, '');
  // set 함수 내에서 객체를 참조하는 변수
  // JavaScript의 객체 및 참조에 대한 동작 방식으로, 함수 내에서 객체를 수정하면 원본 객체도 수정된다.
  return set.size;
}
