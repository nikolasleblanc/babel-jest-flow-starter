// @flow

function sum(a: number, b: number): number {
  return a + b;
}
module.exports = sum;

/*
// won't work
function sum(a: string, b: number): number {
  return a + b;
}
module.exports = sum
*/
