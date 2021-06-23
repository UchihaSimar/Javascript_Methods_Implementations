/**
 * Sort :This method used to arrange/sort array’s item either ascending or descending order.
 */

//OOTB Javascript
console.log("OOTB Javascript ----->");
const arr = [1, 2, 3, 4, 5, 6];
const alpha = ["e", "a", "c", "u", "y"];
console.log(arr.sort((a, b) => (a > b ? 1 : -1)));
console.log(arr.sort((a, b) => (a > b ? -1 : 1)));
console.log(alpha.sort((a, b) => (a > b ? 1 : -1)));
console.log(alpha.sort((a, b) => (a > b ? -1 : 1)));
