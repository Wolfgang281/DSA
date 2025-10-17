//? Given an sorted array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

let arr = [2, 7, 11, 15];
let target = 20;

function findTarget(arr, target) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}
console.log(findTarget(arr, target));
//? TC ==> O(n2)
//? SC ==> O(1)

function findTargetOptimized(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let sum = arr[start] + arr[end];
    if (sum === target) return [start, end];
    else if (sum > target) end--;
    else start++;
  }
  return [-1, -1];
}
//? TC ==> O(n)
console.log(findTargetOptimized(arr, target));
/* 
let emp = {
  name: "abc",
  age: "34",
  email: "abc@123",
};

for (let key in emp) {
  console.log(key);
  if (key === "age") console.log("present");
  console.log(emp[key]);
}
// for (let value of emp) {
//   console.log(value);
// } */

let arr2 = [2, 15, 3, 12, 8, 5, 1, 4, 5, 16];
// 0  1   2    3  4  5  6  7 8   9
let target2 = 20;

//? map --> {key: value} key will be elements of an array and value will be their index

//? map : key --> elements, value --> index

function getIndex(arr, target) {
  if (arr.length === 1) return [];

  let n = arr.length;
  let map = new Map();
  let result = [];
  for (let i = 0; i < n; i++) {
    let diff = target - arr[i];
    if (map.has(diff)) {
      let value = map.get(diff);
      result.push([value, i]);
    } else {
      map.set(arr[i], i);
    }
  }
  console.log(result);
}

getIndex(arr2, target2);
