function diagonalDifference(arr) {
  const rows = arr.length;
  let primary = 0;
  let secondary = 0;

  for (let i = 0; i < rows; i++) {
    console.log(arr[i][i]);
    primary = primary + arr[i][i];
    secondary = secondary + arr[i][rows - 1 - i];
  }

  const result = Math.abs(primary - secondary);

  return result;
}
