function solution(n, a, b) {
  let counter = 0;

  while (true) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    counter++;
    console.log(a, b, '=>', counter);
    if (a === b) break;
  }
  return counter;
}
