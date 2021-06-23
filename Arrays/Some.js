/**
 * Some : This method check if at least one of array’s item passed the condition. If passed, it return ‘true’ otherwise ‘false’.
 */

//OOTB Javascript
console.log("OOTB Javascript------>");
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.some((item) => item > 4));
console.log(arr.some((item) => item < 0));

//Custom Implementation
console.log("Custom Implementation ---->");
Array.prototype.mySome = function (callback) {
  for (let ele of this) if (callback(ele)) return true;
  return false;
};
const myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr.mySome((item) => item > 4));
console.log(myArr.mySome((item) => item < 0));
