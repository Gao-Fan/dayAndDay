// 递归求和
// nums: 5, 1, 3, 6, 2
// f(i) 表示从数组第i位到末尾之和

// demo01
const nums = [5, 1, 3, 6, 2]
function f(i) {
  return i >= nums.length ? 0 : nums[i] + f(i + 1)
}
console.log(f(2))
