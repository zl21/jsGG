/**
 * 
 * 
 * 原型:原型就是个对象,有两个:prototype,__proto__
 * prototype:显示原型,浏览器的标准属性,在函数中存在,给程序员使用的
 * __proto__:隐式原型,浏览器的非标准属性,在对象中存在,给浏览器使用
 * 一般都是通过__proto__查找对应的继承的父级对象(找的是prototype)
 * stu对象,stu.__proto__------->Student.prototype---->说明:stu是Student的实例对象
 * 作用:
 * 1. 共享数据,节省内存空间
 * 2. 实现继承
 * 继承:
 * 1.改变原型指向实现继承
 * 2.借用构造函数实现继承
 * 3.组合继承
 * 4.拷贝继承
 * 
 * 普通函数实际上是Function的实例对象
 * Person这个构造函数或者Object这个构造函数实际上都是Function的实例对象
 * var per = new Person(),per是Person的实例对象,Person.prototype中的__proto__指向的是Object的prototype
 * Function.__proto__指向的是Function的prototype
 * 总结:只要是函数,就是对象,就是Function的实例对象
 * Function.prototype.__proto__指向的是Object的prototype
 * Object.prototype.__proto__指向的是null
 * 
 * 原型链:是一种关系,实例对象和原型对象之间的关系
 * 实例对象调用的属性或者方法,首先在当前的实例对象中查找,找到了则直接使用,找不到则通过__proto__找到父级的对象,在该对象中进行查找,找到了则使用,找不到则继续通过原型链进行查找,一直找到Object.prototype,如果还没有则就报错
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */