// map和parseInt
['1', '2', '3'].map(parseInt)

/**
 * ['1', '2', '3'].map(函数)
 * 
 * [
 *  1,    // parseInt第二个参数是 0 默认走十进制
 *  NaN,  // parseInt第二个参数是 1 小于2 NaN 进制范围是 2-36
 *  NaN   // parseInt第二个参数是 2 NaN 二进制里边没有三
 * ]
 */