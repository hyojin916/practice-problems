// * https://school.programmers.co.kr/learn/courses/30/lessons/17686

// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

function solution(files) {
  let num = /[^0-9]/g;

  files.map((elem, idx) => {
    const strNum = new Set(elem.split(num).filter((i) => i !== ''));
    const numIdx = elem.indexOf(Array.from(strNum)[0]).toString();

    const NUMBER = Array.from(strNum)[0];
    const HEAD = elem.substr(0, elem.indexOf(NUMBER));
    const EXCEPT_HEAD = elem.substr(elem.indexOf(NUMBER)); // num_tail

    const fullname = HEAD + EXCEPT_HEAD;

    files[idx] = [NUMBER, HEAD, fullname];
  });
  files.sort(
    (a, b) =>
      a[1].toLowerCase().localeCompare(b[1].toLowerCase()) ||
      Number(a[0]) - Number(b[0])
  );

  files.map((elem, idx) => (files[idx] = elem[2]));

  return files;
}

//채점 결과
// 정확성: 30.0;
// 합계: 30.0 / 100.0;

function solution(files) {
  let num = /[^0-9]/g;

  files.map((elem, idx) => {
    const strNum = new Set(elem.split(num).filter((i) => i !== ''));
    const name = new Set(elem.split(!num).filter((i) => i !== ''));

    const NUMBER = Array.from(strNum)[0];
    const HEAD = elem.substr(0, elem.indexOf(NUMBER));

    const fullname = Array.from(name)[0];

    files[idx] = [NUMBER, HEAD, fullname];
  });
  files.sort((a, b) => Number(a[0]) - Number(b[0]) || a[1].localeCompare(b[1]));

  files.map((elem, idx) => (files[idx] = elem[2]));

  return files;
}
