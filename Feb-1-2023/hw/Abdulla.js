function num(x, y) {
  if (!parseInt(x) || !parseInt(y)) {
    return "Please Provide a number";
  } else {
    return x + y;
  } 
}
console.log(num(9, 9));
