// 见过的和没见过的数字

/*
这么些会不会报错，如果不报错那么他的值是啥

11 --- 11
.11 --- 0.11 // 省略了0
11. --- 11 // 省略了0
011 --- 9 // 使用0开头 会当成八进制
080 --- 80 // 以0开头当成8进制，打死你后边有无效的八进制数字（8）又会转成10进制
0o11 --- 9 // 以0o开头当成8进制
0o80 --- 报错 // 以0o开头当成8进制，出现无效数字也不会转成十进制，报错处理
0b11 --- 3   // 以0b开头2进制
0x11 --- 17  // 以xb开头16进制
11e2 --- 1100 // 科学计数法 11 * 10 ^ 2
11.toString() --- 报错 // 因为他会理解成小数点后边是数字 但是拿到的不是数字
11 .toString() --- '11' //
*/