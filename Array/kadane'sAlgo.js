function printPrefixArray(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    arr[i] = arr[i] + arr[i - 1];
  }
  console.log(arr);
}

function printSuffixArray(arr) {
  let n = arr.length;
  for (let i = n - 2; i >= 0; i--) {
    arr[i] = arr[i] + arr[i + 1];
  }
  console.log(arr);
}
