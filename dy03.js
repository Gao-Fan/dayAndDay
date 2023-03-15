// 赋值运算的细节 有点东西

/*
  a = 1 的细节 赋值运算的细节

  1: 找到变量 a 的内存地址，准备赋值 （没有的情况下会创建）
  2: 运算右侧代码，找到要赋值的数据
  3: 将右侧的运算的数据放到之前的地址中
  4: 返回整个表达式的结果及右侧运算的数据
*/

var a = { n: 1 }
var b = a
a.x = a = { n: 2 }

console.log(a.x) // undefined
console.log(b.x) // { n: 2 }
