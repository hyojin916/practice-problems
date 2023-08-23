function solution(n, words) {
  let person = 0;
  let count = 1;
  let list = [words[0]];
  let answer = [0, 0]; // [a, b]

  // 1. 단어를 돌며 사람을 지정한다.
  for (let i = 0; i < words.length; i++) {
    if (person === n) {
      person = 1;
      count++;
    } else {
      person++;
    }
    if (i !== 0) {
      const prev = words[i - 1];
      const lastStr = prev.substr(prev.length - 1, 1);
      if (
        list.includes(words[i]) ||
        lastStr !== words[i][0] ||
        words[i].length < 2
      ) {
        answer = [person, count];
        break; // 여기서 끝해줘야함
      } else {
        list.push(words[i]);
      }
    }
  }
  return answer;
}
