/*
 *For Each : This method can help you to loop over array’s items.
 */

//OOTB Javascript
console.log("OOTB Javascript ------->");
const arr = [1, 2, 3, 4, 5, 6];
arr.forEach((item) => console.log(item * 2));

//Custom Implementation of ForEach
console.log("Custom Implementation ------->");
Array.prototype.myForEach = function (callback) {
  for (let ele of this) callback(ele);
};
const myArr = [1, 2, 3, 4, 5, 6];
myArr.myForEach((item) => console.log(item * 2));
