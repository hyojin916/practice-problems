/* * 
https://leetcode.com/problems/3sum/

* 투 포인터(Two Pointer) 방법: 배열을 정렬한 후, 왼쪽과 오른쪽 포인터를 사용하여 합이 0이 되도록 조합을 찾는 방식

*/

// 2 point "i < j < k"

const threeSum = function (nums) {
  // 1. sort
  nums = nums.sort((a, b) => a - b);
  let result = [];

  // 2. nums를 돌면서 pointer를 이동
  for (let i = 0; i < nums.length - 2; i++) {
    // i pointer의 값이 연속으로 같을 때
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        // j, k pointer의 값이 연속으로 같을 때 다음꺼로 이동
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k + 1]) k--;
        // 기본 이동
        j++;
        k--;
      }
      if (sum < 0) j++;
      if (sum > 0) k--;
    }
  }

  return result;
};

const threeSumBad = function (nums) {
  let result = [];
  nums.sort();

  // const set = [...new Set(nums)];
  // console.log('set', typeof set[0]);
  // if (set == 0) {
  //   return [[0, 0, 0]];
  // }
  const set = new Set(nums);

  if (set.size === 1 && set.has(0)) {
    return [[0, 0, 0]];
  }

  // for loop
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        console.log(nums[i], nums[j], nums[k]);
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  let arr = result;
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (
        result[i][0] === result[j][0] &&
        result[i][1] === result[j][1] &&
        result[i][2] === result[j][2]
      ) {
        arr.pop(result[j]);
      }
    }
  }
  return arr;
};
