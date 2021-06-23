/**
 * Array.from() : This change all thing that are array-like or iterable into true array especially when working with DOM, so that you can use other array methods like reduce, map, filter and so on.
 */

//OOTB Javascript
console.log("OOTB Javascript----->");
const nameArray = Array.from("frugence");
console.log(nameArray);

//Custom Implementation
console.log("Custom Implementation ---->");
Array.myFrom = function (iterableData) {
  let result = [];
  for (let ele of iterableData) result.push(ele);
  return result;
};
console.log(Array.myFrom("frugence"));
