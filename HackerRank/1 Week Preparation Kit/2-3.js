// 계수정렬
// * 왜 34번째만 틀림?

function countingSort(arr) {
  // always return a frequency array with 100 elements.
  let count = []; // should be 100 length
  // 1. assignment initial value '0'
  for (let i = 0; i < 100; i++) {
    count.push(0);
  }
  // 2. count number
  for (let i = 0; i < arr.length - 1; i++) {
    count[arr[i]]++;
  }
  console.log(count.join(' '));
}
