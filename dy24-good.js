// 数字格式化

var str = '100000000' // 要求输出成：10,000,000,000

// 重点 正则 断言匹配 ?= 断言匹配 在...的前边 \B 非单词边界
// var result = str.replace(/(?=\B(\d{3})+$)/g, ',')
// console.log(result);

let count = 0
let result = []
str.split('').reverse().forEach((item, index) => {
  if (count === 3) {
    count = 0
    result.push(',')
  }
  count++
  result.push(item)
})
result = result.reverse().join('')
console.log(result);