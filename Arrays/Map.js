/*
 * Map: This method create new array by calling the provided function in every * element.
 */

//OOTB javascript
console.log("OOTB Javascript ------->");
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.map((num) => num * 2));

//Custom Implementation
console.log("Custom Implementation ------->");
Array.prototype.myMap = function (callback) {
  let result = [];
  for (let ele of this) result.push(callback(ele));
  return result;
};
const myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr.myMap((num) => num * 2));
