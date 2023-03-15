// 获得一个随机颜色
// 颜色是 0-256
function randomColor() {
  var r = Math.floor(Math.random() * 256),
  g = Math.floor(Math.random() * 256),
  b = Math.floor(Math.random() * 256)

  return `rgb(${r},${g},${b})`
  // demo2
  // return '#' + Math.random().toString(16).substring(2, 8) // Math.random().toString转成16进制随机数 // 有小BUG
}


