function solution(N, M, mapData) {
  const map = [];
  const visited = []; // * 해당 위치를 방문했는 지 여부 저장

  for (let i = 0; i < N; i++) {
    map.push([]);
    visited.push([]);
  }
  // console.log('map', map); // map [ [], [], [], [], [], [] ]

  const dr = [-1, 1, 0, 0]; // 방향 설정
  const dc = [0, 0, -1, 1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      map[i].push(mapData[i][j]);
      visited[i].push(false);
    }
  }

  const queue = [];
  queue.push([0, 0, 1, false]); // [row, column, distance, canBreakWall]

  visited[0][0] = true;
  let result = -1;

  while (queue.length > 0) {
    const [row, col, distance, canBreakWall] = queue.shift();

    if (row === N - 1 && col === M - 1) {
      result = distance;
      break;
    }

    for (let i = 0; i < 4; i++) {
      const newRow = row + dr[i];
      const newCol = col + dc[i];

      if (newRow >= 0 && newRow < N && newCol >= 0 && newCol < M) {
        if (!visited[newRow][newCol]) {
          if (map[newRow][newCol] === 0) {
            visited[newRow][newCol] = true;
            queue.push([newRow, newCol, distance + 1, canBreakWall]);
          } else if (map[newRow][newCol] === 1 && !canBreakWall) {
            visited[newRow][newCol] = true;
            queue.push([newRow, newCol, distance + 1, true]);
          }
        }
      }
    }
  }

  console.log('result', result);

  return result;
}

module.exports = solution;
