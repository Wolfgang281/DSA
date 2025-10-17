//! map ==> it is a data structure that stores data in key value format. it provides extra set of methods to access map

// let map = new Map(); //~ here creating an instance of map class
// map.set("name", "abc");
// map.set("age", 34);
// map.set("email", "abc@gmail.com");
// map.set("age", 120);
// console.log(map);
// console.log(map.has("phone"));
// console.log(map.get("age"));

//! set("key", "value") --> this is used to add an element in map
//! has("key") --> it is used to check whether the key is present or not returns true or false
//! get("key") --> it is used to get the value of the key

//? in map every operation is O(1) constant

//~ given an array of integers, count the frequency of each element in the array.
let arr = [1, 1, 1, 2, 4, 5, 4, 2, 1, 5, 5, 1, 2, 7, 8, 9];
let str = "";
function countFrequency(arr) {
  let map = new Map();
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    /* if (map.has(arr[i])) {
      let oldValue = map.get(arr[i]);
      let newValue = oldValue + 1;
      map.set(arr[i], newValue);
    } else {
      map.set(arr[i], 1);
    } */
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  console.log(map);
}
countFrequency(arr);
