let arr2 = [2, 13, 1, 7, 45, 16, 11, 15];
let target2 = 52;

function getIndex(arr, target) {
  if (arr.length <= 1) return [-1, -1];

  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let difference = target - arr[i]; // 35-34 = 1
    if (map.has(difference)) {
      let indexOfOldEle = map.get(difference);
      return [indexOfOldEle, i];
    } else {
      map.set(arr[i], i);
    }
  }
  return [-1, -1];
}
console.log(getIndex(arr2, 123));
//! no. of operations --> O(n) time
//! space complexity --> O(n)
