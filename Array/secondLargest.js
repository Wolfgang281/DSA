function secondLargest(arr) {
  if (arr.length <= 1) return "No";

  let first = Number.MIN_VALUE;
  let second = Number.MIN_VALUE;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  return (second = Number.MIN_VALUE ? "undefined" : second);
}

// console.log(secondLargest([12, 3, 34, 7, 8, 0, 1]));
// console.log(secondLargest([1, 1, 1, 2, 2, 34, 34, 12]));
// console.log(secondLargest([1]));

let arr = [-1, -4, -4, 2, -9, -23];
let x = Number.MIN_VALUE;
console.log(arr[1] > Number.MIN_VALUE); //? (-4 > -9007199254740991)
console.log(arr[2] > Number.MIN_VALUE); //? (-4 > -9007199254740991)
console.log(arr[3] < Number.MIN_VALUE); //? (2 < -9007199254740991)
//? -5 >> -6
//:TODO:
