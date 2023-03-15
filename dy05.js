// JS的深度克隆

function deepClone(value) {
  if (typeof(value) === 'object') {
    let clone = null
    if (Array.isArray(value)) {
      clone = []
      value.forEach((item, index) => {
        clone[index] = deepClone(item)
      })
    } else {
      clone = {}
      console.log('val', value)
      for (const key in value) {
        clone[key] = deepClone(value[key])
      }
    }
    return clone
  } else {
    return value
  }
}
var arr1 = [1, 2, 3]
var obj1 = {
  a: 1,
  b: 2,
  c: 3
}
const arr2 = deepClone(arr1)
const obj2 = deepClone(obj1)
console.log('arr2', arr2 === arr1);
console.log('obj2', obj2 === obj1);