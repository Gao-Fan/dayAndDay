/**
 * Set 的妙用
 * 
 * 两个数组的并集、交集、差集
 * 不能出现重复项，得到的结果是一个新数组
 */

const arr1 = [33, 22, 55, 33, 11, 33, 5]
const arr2 = [22, 55, 77, 88, 88, 99, 99]

// 并集
const result1 = [...new Set(arr1.concat(arr2))]

// 交集
const result2 = [...new Set(arr1)].filter(item => arr2.includes(item))

// 差集
const result3 = [...new Set(arr1)].filter(item => !arr2.includes(item))
