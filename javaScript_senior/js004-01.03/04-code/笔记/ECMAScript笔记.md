  # ECMAScript
    ## ECMA组织介绍
      1.ECMA组织:欧洲计算机制造协商会,制定和发布的脚本语言规范
      2.ECMAscript是基于Netscape javaScript的一种标准脚本语言。
      3.JavaScript包含3个部分:
        1)ECMAScript核心(JS标准语法)
        2)浏览器端的扩展
          BOM(浏览器对象模型)
          DOM(文档对象模型)
        3)服务器端的扩展
          Node.js
      4.ES的几个重要版本
        ES5:09年发布
        ES6:15年发布,也叫ECMA2015
        ES7:16年发布,也叫ECMA2016
    ## 理解:
      1. 除了正常运行模式(混杂模式),ES5添加了第二种运行模式:"严格模式(strict mode)"
      2. 顾明思议,这种模式使得JS在严格的语法条件下运行
    ## 目的/作用:
      1. 消除JS语法一些不合理,不严谨的地方,减少一些怪异行为
      2. 消除代码运行的一些不安全之处,为代码的安全运行保驾护航
      3. 为未来新版本的JS做好铺垫
    ## 使用:
      1. 在全局或函数的第一条语句定位为: 'use strict';
      2. 如果浏览器不支持,只解析为一条简单的语句,没有任何副作用
    ## 语法和行为改变
      1. 必须用var 声明变量
      2. 禁止自定义的函数中this指向window
      3. 创建eval作用域
      4. 对象不能有重名的属性(语法报错)

    ## JSON对象()
      0. JSON格式的数据，全是string类型
      1. JSON.stringify(obj/arr),将js格式(对象/数组)转换为--->json格式(对象/数组)
      2. JSON.parse(json),将json格式(对象/数组)转换为--->js格式(对象/数组)
      3. 用于前后端进行交互(或者数据的存储)

    ## ES5给Object扩展了一些静态方法,常用的2个:
      1. Object.create(prototype,[descriptors])
      1. Object.create(prototype,[descriptors]) 创建对象并继承
        - 作用: 以指定对象为原型创建新的对象
        - 为新的对象指定新的属性,并对属性进行描述
        - value: 指定的值
        - weitable:标识当前属性值是否是可修改的,默认为false
        - configurable:标识当前属性是否可以被删除,默认是false
        - enumberable: 标识当前属性是否能用for in 枚举,默认为false
        - for-in(性能问题)不仅枚举自身属性,也可以枚举原型对象上的属性,一般配合对象.hasOwnProperty()方法
      2. Object.defineProperties(object, descriptors)
        - 作用:为指定对象定义扩展多个属性
        - get: 用来获取当前属性值的回调函数
        - set: 修改当前属性值的触发的回调函数,并且实参为修改后的值
        - 存储器属性: settter,getter一个用来存值,一个用来取值
      3. 对象本身有两个方法
        - get propertyName(){} 用来得到当前属性值的回调函数
        - set propertyName(){} 用来监视当前属性值变化的回调函数
    ## Array的方法扩展
      1. Array.prototype.indexOf(value):得到数组中的某个数据的第一个下标,用来找数据的
      2. Array.prototype.lastIndexOf(value):得到数组中某个数据的最后一个小标
      3. Array.prototype.forEach(function(item,index){}):遍历数组
      4. Array.prototype.map(function(item,index){}):遍历数组,返回新数组
      5. Array.prototype.filter(function(item,index){}):遍历数组,过滤后的数组
    ## Function的扩展
      1. Function.prototype.bind(obj)
        - 作用:讲函数内的this绑定为obj,并将函数返回
      2. 面试题:区别:bind()与call和applay()?
        - call()/apply()是立刻调用函数
        - bind()是将函数返回

    ## let关键字
      1. 作用: 与var 类似,用于声明变量
      2. 特点:在块级作用内有效,不能重复声明,不会预处理,不存在提升
      3. 应用:循环遍历加监听,使用let取代var是趋势
    ## const关键字
      1. 作用: 定义一个常量
      2. 特点: 不能修改,其他的同let一样
      3. 应用: 保存不用改变的数据
    ## WebStorm--->Languages&Frameworks--->Javascript--->右侧的窗口中找下拉框--->切换ECMAScript 6 保存即可

    ## 解构赋值
      1. 理解:从对象或数组中提取数据,并赋值给变量(多个)
      2. 对象的解构赋值: let {m,n}={n:'a',m:'b'}
      3. 数组的解构赋值: let [a,b]=[10,'测试']
      4. 用途: 给多个形参赋值
      5. 注意:解构赋值对象的时候,写的变量名字一定是对象中存在的属性名字,想要什么属性就写什么属性

    ## 模版字符串
      1. 作用:简化字符串的拼接
      2. 模版字符串必须用 `` 包含
      3. 变化的部分使用 ${xxx}定义
    ## 简化对象的写法
      1. 省略同名的属性值
      2. 省略方法的function
    ## 箭头函数
      1. 作用: 定义匿名函数
      2. 基本语法: ()=>{console.log('xxxx')}
      3. 一个参数: msg=> msg+2
      4. 多个参数: (m,n)=>m+n
      5. 函数体不用大括号:默认有返回结果
      6. 函数体如果有多个语句,需要使用{}包裹,如果内部有需要返回的值,则手动return
      7. 使用场景: 多用来定义回调函数
      8. 箭头函数的特定:
        - 简洁
        - 箭头函数没有自己的this,箭头函数的this不是调用的时候决定的,而是在定义的时候处在自己对象就是它的this
        - 扩展理解: 箭头函数的this看外层的是否有函数,如果有,外层函数的this就是内部箭头函数的this,如果没有则this是window
    ## 三点运算符: 拆包和打包
    ## 形参默认值: 简化函数的形参语法
    ## Promise对象:代表了未来某个将要发生的事件(通常是一个异步操作)
      1. 理解:有了Promise对象,可以将异步操作以同步的流程表达出来,避免层层嵌套的回调函数(回调地狱)
        - 回调地狱:回调嵌套或者函数相互调用(很乱的调用)
        - ES6的Promise是一个构造函数,用来生成Promise的实例对象
      2. 使用Promise基本步骤(2步)
        - 创建Promise对象
        - let promise = new Promise((resolve,reject)=>{
          // 初始化promise状态为pending,执行异步操作
          if(异步操作成功){
            resolve(value); // 修改promise的状态为fullfilled
          }else{
            reject(errMsg); // 修改promise的状态为rejected
          }
        })
        - 调用promise的then()
        - promise.then(function(){
            result=>console.log(result),
            errorMsg=>alert(errorMsg)
        })
      3. promise对象的三个状态
        - pending: 初始化状态
        - fullfilled: 成功状态
        - rejected: 失败状态
      4. 应用:
        - 使用promise实现超时状态
        - 使用promise封装ajax请求
        let request = new XMLHttpRequest();
        request.onreadystatechange=function(){}
        request.respnseType='json';
        request.open('GET',url)
        request.send()