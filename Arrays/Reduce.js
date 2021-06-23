/*
 *Reduce : The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value - MDN
 */

//OOTB Javascript
console.log("OOTB Javascript ---->");
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.reduce((total, value) => total + value, 0));

//Custom Implementation
console.log("Custom Implementation ---->");
const myArr = [1, 2, 3, 4, 5, 6];
Array.prototype.myReduce = function (callback, initialValue) {
  let result = initialValue;
  for (let ele of this) result = callback(result, ele);
  return result;
};
console.log(myArr.myReduce((acc, item) => acc + item, 0));
