/**
 * 统计下面字符串每个字符出现的频率
 * 
 * 秀操作 reduce，(x, xx, xxx) 括号运算符
 */

var str = 'snwjqissjkwkska'

// const result = str.split('').reduce((a, b) => {
//   a[b] ? a[b]++ : a[b] = 1
//   return a
// }, {})

// 一行优化
const result = str.split('').reduce((a, b) => (a[b]++ || (a[b] = 1), a), {})
// 知识点：(x, xx, xxx) 括号运算符  前边表达式计算一遍，返回最后一个

console.log(result);