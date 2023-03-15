// 属性存不存在 非常不错呢

/**
 * 判断对象中是否存在每个属性
 * @param {Object} obj 对象
 * @param {String} key 属性名
 */

function hasProperty(obj, key) {
  return key in obj; // in 可以判断属性是不是在自身 或原型链上

  // 1: ES6 return Object.keys(obj).includes(key) 
  // 问题: Object.keys 无法拿到Object.defineProperty 定义的不可遍历的属性 enumerable: false 

  // 2: obj.hasOwnProperty
  // 问题：toString 会判断出不存在 因为是 Own Property 自身的属性
}