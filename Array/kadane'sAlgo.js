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

let arr = [1, 2, 3, 4, 5];
let result = [1, 3, 6, 10, 15];
let res = [15, 14, 12, 9, 5];

/* 
==>  Kadane’s Algorithm

Maximum Subarray Sum
Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum.
Example: arr = [-2,1,-3,4,-1,2,1,-5,4] → Output: 6 ([4,-1,2,1])

Maximum Sum of Non-Empty Subarray in Circular Array (Simplified)
Given a circular array, find the maximum sum subarray considering wrap-around.
Hint: Combine Kadane’s for normal + totalSum - Kadane’s for inverted array.

Find the Subarray with Maximum Sum and Print It
Extend Kadane’s algorithm to return the subarray itself.

==>  Prefix Sum Array

Range Sum Query (Static)
Given an array and multiple queries asking for sum from L to R, use prefix sum to answer in O(1).

Equilibrium Index of an Array
Find an index such that the sum of elements on its left is equal to the sum on its right.

Subarray Sum Equals K 
Find count of subarrays whose sum equals K using prefix sums 

==>  Suffix Array / Suffix Sum

Find Suffix Sums of an Array
Build an array where suffix[i] = sum of all elements from i to end.

Check if Array Can Be Split into Two Equal Sums (Using Prefix & Suffix)
Return true if there exists an index i such that prefixSum[i] == suffixSum[i].

Find Maximum Suffix Sum
Simple: Find index with the largest suffix sum.
*/
