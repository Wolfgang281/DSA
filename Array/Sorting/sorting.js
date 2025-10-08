//~ bubble ==> in bubble sort adjacent elements are compared and swapped if they are not in correct order, after every iteration the largest element is placed at the end of the array

//~ selection ==> in this, we select a minimum element in the array and place it in the starting of the array, after every iteration the minimum element is always sorted.

//~ insertion ==> in this we insert a new element at its correct position in the array, after every iteration the array is sorted.

//! divide and conquer
//~ merge ==>
//! quick

//! ======================= bubble sort ===========================
let arr = [1, 2, 3, 4];
function bubbleSort(arr, n) {
  let count = 0;
  let swap = false;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        count++;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
        //? let temp = arr[j];
        //? arr[j] = arr[j + 1];
        //? arr[j + 1] = temp;
      }
      if (swap === false) break;
    }
  }
  console.log(arr);
  console.log(count);
}
// console.log(bubbleSort(arr, arr.length));

//! time complexity: worst case --> O(n^2); best case --> O(n)
//! space complexity: O(1) constant

//! ======================= selection sort ===========================

function selectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    //? swap only if you find minimum element, if not found don't swap
    if (minIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
      // [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  console.log(arr);
}

// selectionSort([3, 7, 1, 2, 5], 5);

// [3, 7, 1, 2, 5]
//! ====================== insertion sort ====================
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let currEle = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currEle) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currEle;
  }
  console.log(arr);
}
// insertionSort([3, 1, 7, 2, 5]);

/* function rightShiftArray(arr) {
  let n = arr.length;
  let lastEle = arr[n - 1];
  for (let i = n - 1; i >= 1; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = lastEle;
  console.log(arr);
}
rightShiftArray([1, 2, 3, 4], 4);
//! it-1 ==> [1,1,3,4]
//! it-2; i=1 ==> [1,1,1,4]
//! it-3; i=2 ==> [4,1,1,1]

//? [4,1,2,3] on the same array
 */

//! given two sorted arrays, you have to merge them into one sorted array
let arr1 = [1, 13, 23, 30];
let arr2 = [5, 8, 12, 67];

let ipArr = [34, 9, 2, 56, 12, 7, 23, 78];

function mergeSort(arr, start = 0, end = ipArr.length - 1) {
  //! base case
  if (start === end) return;

  let mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);

  merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  const temp = [];
  let j = mid + 1;
  let i = start;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) temp.push(arr[i++]);
  while (j <= end) temp.push(arr[j++]);

  for (let t = 0; t < temp.length; t++) {
    arr[start + t] = temp[t];
  }
}

mergeSort(ipArr);
console.log(ipArr);
