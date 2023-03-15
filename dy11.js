// 神奇的&运算 没必要
/*
* 判断数字X是否是 2 的 n 次方
* x > 0 且为整数
*/

function isPowerOf2(x) {
  return (x & (x - 1)) === 0
}
console.log(isPowerOf2(5));