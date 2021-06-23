/**
 * Every : This method check if all array’s item passed the condition. If passed, it return ‘true’ otherwise ‘false’.
 */

//OOTB Javascript
console.log("OOTB Javascript ----->");
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.every((item) => item >= 4));
console.log(arr.every((item) => item >= 0));

//Custom Implementation
console.log("Custom Implementation ---->");
Array.prototype.myEvery = function (callback) {
  for (let ele of this) if (!callback(ele)) return false;
  return true;
};
console.log(arr.myEvery((item) => item >= 4));
console.log(arr.every((item) => item >= 0));
