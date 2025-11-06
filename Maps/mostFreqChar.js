function mostFreqChar(str) {
  let map = new Map();
  for (let char of str) {
    /* if (map.has(char)) {
      let oldValue = map.get(char);
      let newValue = oldValue + 1;
      map.set(char, newValue);
    } else {
      map.set(char, 1);
    } */
    map.set(char, (map.get(char) || 0) + 1);
    //! iterate the map
    //? check for maximum freq
  }
  console.log(map);
}

mostFreqChar("hello");
