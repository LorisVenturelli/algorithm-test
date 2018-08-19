var list = [6, 1, 4, 2, 5, 3];

list.sort(function (a, b) {
  // Sort by odd and even
  if (a % 2 !== b % 2){
    return b % 2;
  }

  // Sort ascending
  return a - b;
});

console.log(list);
