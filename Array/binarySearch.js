function bS(arr, x) {
  let n = arr.length;
  let s = 0;
  let e = n - 1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (arr[mid] === x) return true;
    else if (arr[mid] > x) e = mid - 1;
    else s = mid + 1;
  }
  return false;
}

console.log(bS([7, 10, 12, 17, 27, 40], 13));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
