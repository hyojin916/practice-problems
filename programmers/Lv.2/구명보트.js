//school.programmers.co.kr/learn/courses/30/lessons/42885#

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a); // 내림차순으로 정렬

  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      right--; // 가장 무거운 사람과 가장 가벼운 사람 함께 탑승
    }
    left++; // 다음으로 가벼운 사람 탑승

    answer++; // 구명보트 개수 증가
  }

  return answer;
}

//
function solution(people, limit) {
  var answer = 0;
  // 1. people을 sorting
  people.sort((a, b) => a - b);
  // 2. map으로 만들어서
  const map = new Map();
  people.forEach((elem) => {
    map.has(elem) ? map.set(elem, map.get(elem) + 1) : map.set(elem, 1);
  });
  // 3. for 문을 돌면서, 큰 수와 더해서 limit보다 작을 때 마다 빼고, answer++
  for (let i = people.length - 1; i >= 0; i--) {
    let person = people[i];

    if (map.get(person) === 0) continue; // 이미 처리된 사람은 건너뜁니다.

    if (person === limit && map.get(person) > 1) {
      answer++;
      map.set(person, map.get(person) - 1);
      continue;
    }

    let remainingWeight = limit - person;

    if (map.has(remainingWeight) && map.get(remainingWeight) > 0) {
      // 같이 탈출할 수 있는 사람이 있는 경우
      answer++;
      map.set(person, map.get(person) - 1);
      map.set(remainingWeight, map.get(remainingWeight) - 1);
      if (remainingWeight === person && map.get(remainingWeight) > 1) {
        map.set(person, map.get(person) - 1);
      }
    } else {
      // 같이 탈출할 수 있는 사람이 없는 경우 혼자 탈출
      answer++;
      map.set(person, map.get(person) - 1);
    }
  }
  // console.log(map)
  return answer;
}
// 정확성: 14.8;
// 효율성: 11.1;
// 합계: 25.9 / 100.0;
