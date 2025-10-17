let arr = [1, 0, 21, 0, 31, 15, 0, 0, 1, 3]; // 10
//? [1, 21, 31, 15, 1, 3, 0, 0, 0, 0] // 10
//! given an array of integers, move all the zeros to the end of the array. (do not change the order of non-zero elements while maintaining the length of the array).

function moveZeros(arr) {
  let n = arr.length;
  let pos = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[pos] = arr[i];
      pos++;
    }
  }
  //! insert zeros at the remaining indices
  while (pos < n) {
    arr[pos] = 0;
    pos++;
  }

  console.log(arr);
}

moveZeros(arr);

/* for (let i = 0; i < 24; i++) {
  setTimeout(() => {
    console.log(i);
  }, 5000);
} */
