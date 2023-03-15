/**
 * 变态面试题
 * 
 * 答案 10
 */

console.log(++[[]][+[]] + [+[]]);

// step1: 
(++[[]][+[]]) + ([+[]])

// step2: 
(++[[]][0]) + ([0]) // +[] 先valueof 然后toString 得到空字符串，然后调用 + 转成0

// step3: 
(++[]) + ([0]) // ++[] 先valueof 然后toString '' 转成number ++ 得到1 

// step4: 
1 + [0] // ++[] 先valueof 然后toString '' 转成number ++ 得到1 

// step5: 
1 + [0] // [0] 先valueof 然后toString '0' 转成 1 + '0'

// result
'10'
