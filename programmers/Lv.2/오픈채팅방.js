// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  let answer = [];
  const map = new Map();
  for (let i = 0; i < record.length; i++) {
    const words = record[i].split(' ');
    switch (words[0]) {
      case 'Enter':
      case 'Change':
        map.set(words[1], words[2]);
        break;
      case 'Leave':
        break;
    }
    answer[i] = [words[1], record[i]];
  }

  for (let i = 0; i < answer.length; i++) {
    const words = answer[i][1].split(' ');
    const name = map.get(words[1]);

    switch (words[0]) {
      case 'Enter':
        answer[i] = `${name}님이 들어왔습니다.`;
        break;
      case 'Leave':
        answer[i] = `${name}님이 나갔습니다.`;
        break;
      default:
        answer[i] = 'Change';
    }
  }

  const result = answer.filter((item) => item !== 'Change');
  return result;
}
