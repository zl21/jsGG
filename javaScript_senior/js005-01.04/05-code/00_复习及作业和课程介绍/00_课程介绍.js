/**
 * 
 *  ECMAScript----ES5
 * ES6
 * 
 * 
 * 
 * 
 * 
 */

// 闭包；函数模式的闭包
function f1 () {
  var age = 10
  return function () {
    console.log(age)
  }
}
f1()()
// 闭包:对象模式的闭包
function f2 () {
  var age = 20
  return {
    age: age
  }
}
f2().age