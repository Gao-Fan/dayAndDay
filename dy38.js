/**
 * css 复合属性造成的问题
 * 
 * 复合属性重新定义之后 会覆盖之前设置的属性
 * 
 * 例如 重新设置 background: url(***)
 * 会覆盖 background-size
 * 
 * 如何避免：使用 background-image 去覆盖url
 */