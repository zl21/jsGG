/**
 * 
 * ES6中今天讲的所有的代码,全部三遍
 * 
 * 冒泡排序的代码写一遍
 * 交换两个变量的值的两种方式的代码
 * 
 * 
 * 
 * 
 */
// 冒泡
var arr = [10, 20, 30];
for (var i = 0; i < arr.length - 1; i++) {
  for (var j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] < arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}