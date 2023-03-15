// 变量交换的问题 有点东西 但不多

var a = 1
var b = 2
// 如何不借助第三个变量完成上面的交换
// demo1: 比如 a = x  b = y 只能针对数字
// a = a + b // a xy
// b = a - b // b x
// a = a - b // a y xy - x

// demo2 ES6解构
[b, a] = [a, b]
console.log('a', a)
console.log('b', b)