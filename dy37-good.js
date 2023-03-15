/**
 * 高频面试题-并发请求
 * @param {string[]} urls 请求地址
 * @param {number} maxNum 最大请求数
 * 
 * 思路：
 * 1: 写好请求函数，请求结束后再调用请求
 * 2: 最大请求数 就是请求函数调用次数
 */
function concurRequest(urls, maxNum) {
  return new Promise((resolve) => {
    if (urls.length === 0) {
      resolve([])
      return;
    }

    const results = []
    let index = 0
    let count = 0

    async function request() {
      if (index === urls.length) {
        return
      }
      const i = index
      const url = urls[i]
      index++
      try {
        const resp = await featch()
        results[i] = resp
      } catch (err) {
        results[i] = err
      } finally {
        count++
        if (count === urls.length) {
          console.log('over');
          resolve(results)
        }
        request()
      }
    }
    const times = Math.min(maxNum, urls.length)
    for (let i = 0; i < times; i++) {
      request()
    }
  })
}
