let arr3 = [2, 3, -5, 1, 0, -4, 5, 8, -1, 2]; //? sum => 14
//? sub array: any continuous part of an array
//? sub sequence: a sequence of elements in an array but in a given direction

function maxSubArraySum(arr) {
  let n = arr.length;
  let maxSum = Number.MIN_VALUE;
  for (let i = 0; i < n; i++) {
    let currentSum = 0;
    for (let j = i; j < n; j++) {
      currentSum += arr[j];
      if (currentSum > maxSum) maxSum = currentSum;
    }
  }
  console.log(maxSum);
}

maxSubArraySum(arr3);
//! TC --> O(n^2)
//! SC --> O(1)

//? kandane's algorithm --> prefix and suffix arrays

function maxSubArraySumOptimized(arr) {
  let maxSum = arr[0];
  let n = arr.length;
  let currentSum = arr[0];
  for (let i = 1; i < n; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) maxSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
}
console.log(maxSubArraySumOptimized(arr3));
//~ TC --> O(n)
//~ SC --> O(1)
