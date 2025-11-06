//! set --> it is data structure that stores only unique values, it doesn't allow duplicates, if you try to add a duplicate value it will be ignored (no error will be thrown)
let set = new Set();

//? to add an element in set --> add(element)
set.add(1);
set.add(10);
set.add(12);
set.add(1212);
set.add(1);
set.add("1");
set.add("1");
set.add("1");
set.add("1");
set.add("1");
console.log(set);

//? delete(element) --> to remove an element from set
set.delete(12);

//? has(element) --> to check whether the element is present in set or not returns true or false
console.log(set.has(12));

//? clear() --> removes all the element from set
// set.clear();

//? size (it is a read only property not a method) --> returns the number of elements in set
console.log(set.size);

console.log(set);
