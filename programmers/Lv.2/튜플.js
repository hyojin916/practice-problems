// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  let answer = [];

  const objS = s.slice(2, s.length - 2).split('},{');
  objS.sort((a, b) => a.length - b.length);

  objS.forEach((element) => {
    const numbers = element.split(',').map(Number); // 숫자 배열로 만든다음
    numbers.forEach((num) => {
      if (!answer.includes(num)) {
        answer.push(num); // 없는거 넣기
      }
    });
  });

  return answer;
}
