/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/1845
 *
 * 배운 점
 * Set은 배열의 중복 값을 없애준다.
 * key에 따른 value의 빈도 수가 중요하지 않다면 Map 대신 Set을 쓰는 것이 더 간편하다.
 * map, set의 size를 반환하는 메서드는 map.size, set.size 이다. "()-괄호"를 쓰지 않음
 * if else 문이 간단할 때는 삼항연산자를 쓰는 것이 깔끔.
 *  */

function solution(nums) {
  // 1. nums로 map을 만들어서 숫자가 몇 번 들어간지 정리할 수 있다. - map으로 만들기
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  // 2. nums.length는 항상 짝수이니까 newMonsNums = "nums/2 의 갯수" 만큼 가져갈 수 있다.
  const monsTypesNums = map.size;
  const newMonsNums = nums.length / 2;

  // 3. map.size를 측정
  // 3-1 map.size < newMonsNums -> map.size() 만큼 return
  // 3-2 map.size = newMonsNums -> map.size() 만큼 return
  // 3-3 map.size > newMonsNums -> newMonsNums 만큼 return
  if (newMonsNums > monsTypesNums || newMonsNums === monsTypesNums) {
    return monsTypesNums;
  } else {
    return newMonsNums;
  }
}

// 24분 - 난이도 쉬움

//  * 리팩토링 1 (삼항연산자)
function solution(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i])
      ? map.set(nums[i], map.get(nums[i]) + 1)
      : map.set(nums[i], 1);
  }

  const monsTypesNums = map.size;
  const newMonsNums = nums.length / 2;

  return newMonsNums < monsTypesNums ? newMonsNums : monsTypesNums;
}

// * 리팩토링 2 (Map -> Set)
function solution(nums) {
  const monsTypesNums = new Set(nums);
  const newMonsNums = nums.length / 2;

  return newMonsNums < monsTypesNums.size ? newMonsNums : monsTypesNums.size;
}
