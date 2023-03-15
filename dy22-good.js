// 不使用计时器做动画

// 传统方式使用 setTimeout 
// 新的API 使用 requestAnimationFrame() 每次渲染前会执行

function raf() {
  requestAnimationFrame(function() {
    // 设置动画，例如改变位置
    raf() // 继续设置下一帧
  })
}