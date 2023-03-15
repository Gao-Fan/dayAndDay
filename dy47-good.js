/**
 * 用代理处理动态属性
 * 
 * 使 add[2][3][10] + 100 等于115 成立
 * 
 * 这个题有点残忍
 */

// const add = new Proxy({
//   _store: 0
// }, {
//   get(target, p, receiver) {
//     if (p === Symbol.toPrimitive) {
//       return () => {
//         return target._store
//       }
//     }
//     target._store += +p
//     return receiver
//   }
// })

// console.log(add[2][3][10] + 100)
console.log(add[10][20][30] + 40)


const add = (arr) => {
  const result = 0
  result += arr[0]
  return add[result]
}

console.log(add[10][20][30] + 40)
