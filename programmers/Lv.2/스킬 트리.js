function solution(skill, skill_trees) {
  // skill_trees중 skill에 해당하는 값이 없을 때는 무조건 가능
  const skiiArr = skill.slice();
  let answer = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    const stringArr = skill_trees[i].split('');

    let temp = skiiArr.split(''); // [C, B, D]
    let right = true;

    for (let j = 0; j < stringArr.length; j++) {
      if (!temp.includes(stringArr[j])) continue; // 힐링
      if (temp[0] === stringArr[j]) {
        temp.shift(); // 맨앞에서 빼기
      } else {
        right = false;
        break;
      }
    }
    if (right) answer++;
  }
  return answer;
}
