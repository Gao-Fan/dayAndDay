/**
 * 字符串长度BUG
 * 
 * JS 早期对字符的编码使用的是 ucs-2,及一个文字对应一个码元
 *    为了兼容emjo表情和生僻字使用了 utf-16规范,及可能一个文字对应两个码元
 * 
 * codePointAt 根据位置获取码点的值
 * fromCodePoint 根据码点恢复文字
 */
const str = '好𠮷嗯我'
// console.log(str.length);

// 如何解决 ---> 码点 一个文字对应一个码点
String.prototype.sliceByPoint = function(pStart, pEnd) {
  let result = '' // 截取的结果
  let pIndex = 0 // 码点坐标
  let cIndex = 0 // 码元坐标
  while(1) {
    if (pIndex >= pEnd || cIndex >= this.length) {
      break;
    }
    const point = this.codePointAt(cIndex)
    if (pIndex >= pStart) {
      result += String.fromCodePoint(point)
    }
    pIndex++
    cIndex += point > 0xffff ? 2 : 1
  }
  return result
}
console.log(str.sliceByPoint(0, 2))
console.log(str.slice(0, 2))