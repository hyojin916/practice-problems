let q = [];
undefined;
q.push('first');
// 1
q.push('second');
// 2
q.push('third');
// 3
q;
// (3) ['first', 'second', 'third']
q.unshift();
// 3
q;
// (3) ['first', 'second', 'third']
q.shift();
// 'first'
q;
// (2) ['second', 'third']0: "second"1: "third"length: 2[[Prototype]]: Array(0)
q.shift();
// 'second'
q.shift();
// 'third'
q;
// []
q.unshift('first');
// 1;
q.unshift('second');
// 2;
q.unshift('third');
// 3;
// q(3)[('third', 'second', 'first')];

q.pop();
// ('first');
q.pop();
// ('second');
q.pop();
// ('third');
