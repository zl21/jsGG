# JS高级
  ## 变量和常量
      1. 变量:用来存放数据,保存的数据可以修改
      2. 常量:用来存放数据,保存的数据不可修改
      3. 变量和常量的本质,无论是变量还是常量,其本身都是数据,也需要在内存中占用内存空间,保存在内存的栈结构分区中
  ## 数据类型
      1.ECMAScript标准定义了8种数据类型
        - 7种原始数据类型：String,Numbr,Boolean,Undefined,null,Symbol,BigInt
        - 1种复杂数据类型：Object
  ## 基本数据类型(简单数据类型)
      1. 基本数据类型
        - string,number,boolean,undefined,null
  ## 引用数据类型(复杂(复合)数据类型)
      1. 引用数据类型
        - Object,Function,Array
  ## typeof 运算符(判断数据的类型)
      1. 作用:用来获取当前变量中存储的数据的类型
      2. typeof的返回值有多少个
        - String,Number,Boolean,Undefined,Object,Function
        - 特殊的有两个:null和array的结果都是Object
  ## instanceOf 运算符(原生JS判断实例化对象的类型)
      1. 作用:用来判断当前实例化对象是不是某种数据类型
  ## 基本数据类型和引用数据类型在内存中,内存空间是如何存储数据的
      1. 除 Object 以外的所有类型都是不可变的（值本身无法被改变）,JavaScript 中字符串是不可变的（译注：如，JavaScript 中对字符串的操作一定返回了一个新字符串，原始字符串并没有被改变）。我们称这些类型的值为“原始值”。
      2. 基本数据类型的值在栈空间中存储,如果修改了数据,则是把原来的值直接干掉,重新存放新的值
      3. 引用数据类型的对象在堆空间中存储,该空间的地址在栈空间中存储,如果修改栈空间存储的地址,则指向发生变化,也叫引用发生了变化,此时是在堆空间中重新指向了一个新的内存空间(存储了一个新的对象)
      4. 基本类型之间的值如何传递? 传递的是数值
      5. 引用类型之间的值如何传递? 传递的是引用(地址)

  ## 内存:用于暂时存放CPU中的运算数据以及与硬盘等外部存储器交换的数据
      1. 计算机在运行中，CPU就会把需要运算的数据调到内存中进行运算，当运算完成后CPU再将结果传送出来，内存的运行也决定了计算机的稳定运行。
      2. 内存通电后产生的存储空间(临时的)
      3. 产生和死亡:内存条(集成电路板)--->通电--->产生一定的容量存储空间--->存储各种数据--->断电--->内存空间全部消失
      4. 内存的空间是临时的,而硬盘的空间是持久的
      5. 内存包含2个数据:内存存储的数据(一般数据/地址数据)和内存地址值数据
      6. 内存分类:
        - 栈结构(列表结构): 全局变量，局部变量(空间较小)
        - 堆结构: 对象 (空间较大) 
  ## 函数:代码的重用,分为:函数声明及函数表达式,一个函数最好只代表的是一个功能
        - 函数可以隔离变量,减少命名冲突(命名污染)
      1. 函数声明
        - function () {}
      2. 函数表达式:
        - var fn =function (){}
      3. 函数调用的方式:
        - 直接调用 fn()
        - 对象调用 obj.sayHi()
        - new 构造函数 new Object()
        - apply/call 调用 f1.call(this,num1,num2), 改变this的指向

  ## 回调函数:定了,没有直接调用,但是最后执行了
      1. 常见的回调
        - DOM事件的回调
        - 定时器中的回调
        - ajax回调函数(后面讲)
        - 生命周期的回调(后面讲)
      2. IIFE立即执行函数(Immediately-Invokey Function Expression) 匿名函数自调用
        - 作用:隐藏内部实现,减少命名空间的污染
  ## 总结函数:
      1. 函数也是对象(原型可以体现出来)
      2. 函数具备行为,可以被调用
      3. 函数:普通函数,构造函数,匿名函数(自调用:IIFE)
      4. 回调函数(事件的回调,定时器的回调)
  ## this:首先是一个关键字,其实也是一个特殊的变量
      1. 提前定义好的,内置变量,特殊的一个关键字
      2. 全局的this:window
      3. 函数中的this:
        - 默认函数中的this是window
        - 方法中的this是当前的实例对象
        - 原型对象中的this是当前的实例对象
      4. 本质上任何函数在执行时都是通过某个对象调用的
      5. this怎么确定?函数调用的时候才能确定this是谁
  ## 预解析
      1. js引擎在js代码正式执行之前(生成全局执行上下文或局部执行上下文)会做一些预解析的操作
      2. 先找关键字var,function
      3. 找到var以后将var后面的变量提前声明,但是不赋值
      4. 找到function以后将function后面的函数提前声明,但是不赋值,也就是说函数在解析之前已经定义完毕了
      5. 变量的提升
        - 浏览器在解析js代码之前,先把变量的声明提升
      6. 函数的提升
        - 浏览器在解析js代码之前,先把函数的声明提升
      7. 注意:f2() var f2=function(){}; 报错:因为f2是undefined
      8. 预解析:全局预解析和局部预解析
  ## debug
      1. debugger 调试 :直接在代码中书写debugger
      2. 断点调试 : 浏览器中Sources中使用断点方式

  ## null
      1. 什么情况为null?
        - 当一个对象需要释放的时候,或者此对象不需要使用了(或者一个变量的值不需要了),此时可以设置为null
        - 当一个对象需要释放的时候,可以手动的设置为null,此时垃圾回收机制就可以回收了,内存也就释放出来了
        - 垃圾回收器
        - var obj={} obj = null 

  ## 执行上下文(动态的):就是一个代码的执行环境(全局执行上下文和函数执行上下文,eval函数执行上下文)
      1. 执行上下文概念:代表了代码执行的环境,包含:执行环境,变量对象,this,作用域链
      2. 流程:
        - js引擎在js代码正式执行前会先创建一个执行环境
        - 进入该环境以后会创建一个变量对象,该对象用于收集:变量,函数,函数的参数,this
        - 找关键字var,function
        - 确认this
        - 创建作用域链
      3. 在全局代码执行前,js引擎就会创建一个栈来存储管理所有的执行上下文
      4. 在全局执行上下文(window)确定后,将其添加到栈中(压栈)
      5. 在函数执行上下文创建后,将其添加到栈中(压栈)
      6. 在当前函数执行完毕后,将栈顶的对象移除(出栈)
      7. 当所有的代码执行完毕后,栈中只剩下window
      8. 重点:执行上下文是动态创建的,尤其是针对函数,每调用一次函数都会创建一次执行上下文
  ## 作用域(虚拟概念):变量的使用范围,静态的(编写代码的时候就已经确定了)
      1. 全局作用域和局部作用域
      2. 全局作用域:函数外部变量的使用范围
      3. 局部作用域:函数内变量的使用范围(一个函数就是一个作用域)
      4. 没有块级作用域(ES6)就有了
      5. 作用:隔离变量,不同的作用域下同名的变量不会冲突
      6. 变量分为:全局变量(非函数内部定义的变量)和局部变量(函数内部定义的变量)
  ## 作用域与执行上下文
      1. 全局作用域之外,每个函数都会创建自己的作用域,作用域在函数定义时已经确定了,而不是函数调用时
      2. 全局执行上下文环境在全局作用域确定之后,js代码马上执行之前创建
      3. 函数执行上下文环境是在调用函数时,函数体代码执行之前创建
      4. 作用域是静态的,只要函数定义好了就一直存在,且不会再变化
      5. 执行上下文是动态的,调用函数时创建,函数调用结束时上下文环境就会释放
      6. 上下文环境(对象)是从属于所在的作用域
      7. 全局上下文环境-->全局作用域
  ## 作用域链(用来查找变量的)
      1. 用来决定代码执行的范围,变量的作用范围
      2. 作用域是代码定义的时候决定的
      3. 作用域链是如何产生的
        - 函数在定义的时候自动添加一个属性'[[Scopes]]'该属性保存的是其上级作用域链
        - 当函数执行的时候,进入执行上下文环境,将创建的变量对象添加到'[[Scopes]]'数组的第一个位置,形成新的数组
      4. 查找变量的规则
        - 先在当前作用域的变量对象中查找,找到则使用
        - 如果没有则沿着作用域链的数组去上级作用域中的变量对象中查找
        - 找到就返回对应的值,如果没有继续向上查找,知道找到最后一个变量对象(全局的变量对象),如果没有则报错

  ## 总结执行上下文和作用域
    变量的查找:
    代码编写的时候确定了当前全局作用域及局部作用域
    在代码马上执行,还没执行,执行上下文环境就出现了,函数调用完毕后,局部执行上下文没了,整个代码结束,全局的执行上下文环境也没了
    全局作用域---->预解析(变量及函数声明的提升)--->全局执行上下文环境--->全局的变量对象{收集：var ,function ,函数参数,this的指向}--->压栈---->遇见有函数定义---->局部作用域---->出现了函数调用----->局部预解析--->局部的执行上下文环境---->局部的变量对象{var ,function ,函数参数,this的指向}--->压栈------>执行完函数，释放弹栈----->js执行完，全部弹栈。


  ## 对象
    1. 工厂模式:
    2. 单例模式:和null是否有关系

  ## 面向对象

  ## 原型


