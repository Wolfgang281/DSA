let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

function maxSubArrSum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  let startIndex = 0;
  //! windowSum of first k elements
  for (let i = 0; i < k; i++) {
    windowSum += arr[i]; //? O(n)
  }
  maxSum = windowSum;
  //! slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum + arr[i] - arr[i - k]; //? O(n)
    if (windowSum > maxSum) {
      maxSum = windowSum;
      //? update the startIndex
      startIndex = i - k + 1;
    }
  }
  let subArr = arr.slice(startIndex, startIndex + k);
  return { maxSum, subArr };
}

//? time complexity --> O(n)
//? space complexity --> O(1)
