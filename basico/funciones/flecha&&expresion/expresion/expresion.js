/*sum(1, 2) // ❌ ReferenceError: sum is not defined

const sum = function (a, b) {
  return a + b
}
*/

const sum = function (a, b) {
  return a + b;
}

console.log(sum(2, 2));
console.log(sum(7, 7));