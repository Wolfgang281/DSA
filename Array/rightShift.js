function rightShiftArr(arr, k) {
  let n = arr.length;
  k = k % n;
  while (k > 0) {
    let temp = arr[n - 1];
    for (let i = n - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    k--;
  }
  console.log(arr);
}
rightShiftArr([1, 2, 3, 4, 5, 6, 7, 8, 11, 12], 24);
//? [4 1 2 3]
//? [3 4 1 2]
//? [2 3 4 1]

//! technique -->
//? first reverse complete array
//? then reverse for 0 to k-1
//? then reverse for k to n-1
