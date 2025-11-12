function longestSubarrayHavingSumK(n, k, arr) {
  let map = new Map();
  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    // If current sum equals k, update maxLen
    if (sum === k) {
      maxLen = i + 1;
    }

    // If (sum - k) exists in map, we found a subarray with sum k
    if (map.has(sum - k)) {
      maxLen = Math.max(maxLen, i - map.get(sum - k));
    }

    // Store the sum only if it's not already in the map
    // This ensures we keep the leftmost index for each sum
    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  return maxLen;
}
