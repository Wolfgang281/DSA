let arr = [4, 3, 2, 1];
function reverseArray(arr) {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    [arr[s], arr[e]] = [arr[e], arr[s]];
    s++;
    e--;
  }
  console.log(arr);
}
