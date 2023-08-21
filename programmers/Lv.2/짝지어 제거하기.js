// * https://school.programmers.co.kr/learn/courses/30/lessons/12973
// * answer를 1로 선언 후 answer return 해보기 (효율성)
// * sort에 compareFn을 넣지 않으면? => If compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function solution(s) {
  // if (s.length % 2 !== 0) return 0;
  if (s.length === 0) return 1;
  const arr = s.split('');
  // console.log('arr', arr)

  let stack = [arr[0]];

  for (let i = 1; i < s.length; i++) {
    if (!!stack && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  console.log(stack.length);
  return stack.length === 0 ? 1 : 0;
}

// 방법1. 재귀 -> 제거할 수 없을 때까지
// 방법2. stack
// function solution(s) {
//   const isTrue = s.length / 2;
//   const arr = s.split('');

//   let elem1 = 0;
//   let elem2 = 1;
//   while (elem2 < s.length) {
//     for (let i = 0; i < s.length; i++) {
//       if (arr[i] === arr[i + 1]) {
//         isTrue--;
//         let out = arr.slice(i, 2);
//         let before = arr.substring(0, i);
//         let after = arr.substring(i + 2, arr.length - 1);
//         arr = [...before, ...after];
//       }
//       elem1++;
//       elem2++;
//     }
//   }
//   console.log('isTrue', isTrue);
// }

// // 방법1. 재귀 -> 제거할 수 없을 때까지
// // 방법2. stack
