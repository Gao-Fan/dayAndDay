/**
 * 块级函数
 */
// 'use strict'

// 以下结果是非严格模式下的输出
var a;
if (true) {
  console.log(a)  // 块级作用域变量提升 fn a
  a = 5;          // 块内 a 变成 5
  function a() {} // 这个操作会把外边的 a 变成 5
  function b() {} 
  a = 0           // 块内 a 声明成 0
  console.log(a)  // 块内 a 为 0
}
console.log(a)    // 全局 a 5
console.log(b)    // b 变量提升 fn b

