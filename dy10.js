// property和Element 有点东西 但不多

var obj = {
  p2: 'aaa',
  2: 'aaa',
  1: 'aaa',
  p1: 'aaa'
}

for (var key in obj) {
  console.log(key) // 1 2 p2 p1
}

// 说明 对象属性的遍历顺序和属性的书写顺序不一样。数字优先 生序排列