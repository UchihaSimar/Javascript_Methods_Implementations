/*
 *Filter : his method create new array with only elements passed condition inside *the provided function.
 */

//OOTB javascript
console.log("OOTB Javascript ------->");
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.filter((num) => num > 3));

//Custom Implementation
console.log("Custom Implementation ------->");
Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let ele of this) if (callback(ele)) result.push(ele);
  return result;
};
const myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr.myFilter((item) => item > 3));
