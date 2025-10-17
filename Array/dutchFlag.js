let arr = [0, 2, 1, 2, 2, 0, 1, 1, 0, 2, 1, 0];

function dutchSort(arr) {
  let n = arr.length;
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  for (let num of arr) {
    if (num === 0) count0++;
    else if (num === 1) count1++;
    else count2++;
  }
  console.log(count0, count1, count2);

  let i = 0;
  while (count0 > 0) {
    arr[i] = 0;
    count0--;
    i++;
  }
  while (count1 > 0) {
    arr[i] = 1;
    count1--;
    i++;
  }

  console.log(arr);
}

dutchSort(arr);

let arr2 = [2, 0, 2, 1, 1, 0];
function optimizedDutchFlag(arr) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let mid = 0;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      low++;
      mid++;
    } else if (arr[mid] === 1) mid++;
    else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  console.log(arr);
}
optimizedDutchFlag(arr2);
