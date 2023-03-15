/**
 * 一个算法题
 * 根据数字按键，得到所有字母的排列组合
 * @param {string} digits 数字按键，例如“23”
 * @return {string[]} 按键的所有排列组合
 */

function keyboardMap(digits) {
  const keyMap = [, , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let result = []
  for (let i = 0; i< digits.length; i++) {
    result = _compose(result, keyMap[digits[i]])
  }
  function _compose(arr1, arr2) {
    let r = []
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        r.push(arr1[i] + arr2[j])
      }
    }
    return r
  }
  return result
}

console.log(keyboardMap('24'));