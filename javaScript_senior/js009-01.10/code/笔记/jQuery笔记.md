  ## jQuery
    ## jQuery简介
      1. jQuery 是一个快速、小且功能丰富的 JavaScript 库。
         它使 HTML 文档遍历和操作、事件处理、动画和 Ajax 等操作变得更加简单, 并且使用易于使用的 API, 该 API 可跨多种浏览器工作。
         jQuery 结合了多功能性和可扩展性, 改变了数百万人编写 JavaScript 的方式。
      2. 作者: 约翰.瑞森(John Resig)
         John Resig, jQuery的创始人和技术领袖，目前在Mozilla担任JavaScript工具开发工程师。著有《Pro JavaScript Techniques》（即《精通JavaScript》）等经典JavaScript书籍。
         John Resig撰写的《Secrets of the JavaScript Ninja》（即《JavaScript忍者的秘密》）在2011年正式出版
      3. 什么是JavaScript框架库？
         普通JavaScript的缺点：每种控件的操作方式不统一，不同浏览器下有区别，要编写跨浏览器的程序非常麻烦。因此出现了很多对JavaScript的封装库。
         innerText和textContent 浏览器兼容问题(html,css,js)
          设置标签中间的文本内容
         function innerText(ele,text){
          // 能力检测的方式
           if(ele.innerText){
             ele.innerText=text
           }else{
             ele.textContent=text
           }
         }
         把很多处理浏览器兼容的代码(封装后的函数,或者是一些对象)放在一个js文件中,此时这个js文件就是JavaScript库(类库---封装了很多的类)
         不仅封装了一些兼容性的代码,还有一些功能性的代码,还有一些异步操作的相关的代码
         JavaScript库就是一个js文件,里面封装了大量的对象,数组,属性及方法,说的直接点,就是封装了很多方法(api),最终返回一个核心对象.
         外部引入该文件,通过核心(顶级对象)对象调用相关的属性及方法完成对应的功能
         常见的Js库
          Prototype、YUI、Dojo、ExtJS、jQuery,zeptojs(移动端)等
          1.常用JavaScript库：
          1>Prototype:
            网址：http://www.prototypejs.org
          2>Dojo:
            网址：http://dojotoolkit.org
          3>YUI（The Yahoo! User Interface Libray）
            网址：http://developer.yahoo.com/yui
          4>Ext JS
            网址：http://www.extjs.com
          5>MooTool
            网址：http://mootools.net
          6>jQuery
            网址：http://jquery.com
          7>zeptojs(移动端的)
            网址: https://zeptojs.com/
      4. 注意问题: 
          - 切记:jQuery的出现,无法取代JS,仅仅是JS的封装,解决浏览器中的兼容问题,及代码的繁琐,封装新功能
      5. jQuery官网(http://jquery.com)
    
      jquery.1.6.1.js 文件(封装了很多的代码) 200k 开发的时候使用
      每个版本的js文件都有两个js文件
      jquery.1.6.1.min.js 文件   70k   压缩之后的js文件在上线的时候



    ## jQuery特点
      1. 写的少,做的多(Write Less,Do More),链式编程,隐式迭代,插件丰富,开源,免费
    ## jQuery核心对象:jQuery()或者$() 函数也是对象.jQuery.属性 或者jQuery.方法()  || $.属性 $.方法()
      1. jQuery中的核心对象就是jQuery(简称为:$),实际上jQuery就是$,他们都是函数(函数也是对象),
        - jQuery和$是一样的,简写的问题
        - jQuery中通过jQuery对象调用方法后返回来的还是jQuery对象(promise对象调用then()方法后返回的还是promise对象)
        let jQuer=$().方法() 方法调用
    
        jQuery对象.方法().方法().方法()------->链式编程
    
        - (function (global, factory) {
            factory(global);
          })(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
              var jQuery = function (selector, context) {
              return new jQuery.fn.init(selector, context);
            }
            if (!noGlobal) {
              window.jQuery = window.$ = jQuery;
            }
          })
        - 函数的自调用,最终,向外暴露了jQuery,$,都是函数
    ## jQuery核心函数: $(param)
      1. 作为函数调用
        - 参数是函数: $(函数) ->    $(function (){}) DOM加载后,执行该函数内部代码
        - 参数是字符串(选择器): $('字符串') ->    $('button') 查找并匹配标签,封装成jQuery对象
        - 参数是DOM对象: $(DOM对象) ->    $(document) 将DOM对象封装成jQuery独享    $(this)
        - 参数是html标签: $(html标签) ->  $(<p></p>)  创建标签对象,封装成jQuery对象
        - 切记:jQuery中this是DOM对象,如果要使用则需要转jQuery对象
      2. 作为对象使用
        - $.each() : 遍历数组及对象的
        - $.trim() : 去除字符串两端空格的
    ## jQuery对象是一个包含所有匹配的任意多个DOM元素的伪数组对象:$(选择器/DOM对象)--伪数组(DOM对象)
      1. size()/length: 包含DOM元素个数
      2. $(DOM对象)[0]/$(DOM对象).get(0)   得到的是DOM对象
      3. each() 方法 : 遍历包含的所有DOM元素
      4. index() 方法 : 得到在所有兄弟元素中的下标


    ## 总结:
      BOM(浏览器)中顶级对象---window
      DOM中顶级对象-----document
      JS中的顶级对象----Object
      jQuery中顶级对象---jQuery或者$
      jQuery/$ 是函数,也是对象
      $(函数/选择器/DOM对象/标签代码)
      $.each()/$.trim()



    ## 原生JS和jQuery对比
      1. JS对象仍然是JS对象,Array,Function,Object
      2. DOM对象:document获取的到的对象
      3. jQuery对象:jQuery调用方法返回的对象
        - $.方法()或者$()方法返回的都是jQuery对象
      4. jQuery对象和DOM对象可以互转
        - $(DOM对象) 此时是jQuery对象
        - $(DOM对象)[0] 或者$(DOM对象).get(0) 
        - 如何识别当前的对象是DOM对象还是jQuery对象?
          DOM对象点出来的都是属性或者事件
          jQuery对象点出来的大多数都是方法
      5. DOM中的页面加载和jQuery中页面加载
        - DOM中页面加载:window.onload=function(){}
        - jQuery中页面加载: 
          $(window).load(function(){})
          $(document).ready(function(){})
          $(function(){})  推荐使用这种
    
    ## 选择器
      1. 基本选择器
        - id选择器: $('#btn')
        - 标签选择器: $('button')
        - 类选择器: $('.cls')
        - 并集选择器: $('div,p')
        - * 通配符: 匹配所有的元素 $('*')
        - 交集选择器: $('div.cls')S
      2. 层次选择器: 查找子元素,后代元素,兄弟元素的选择器
        - 父级元素中所有的后代元素 $('div p')
        - 父级元素下所有的直接子元素 $(div>p)
        - 当前这个元素的后面的第一个兄弟元素 $('div+next')
        - 当前这个元素的前面的所有的兄弟元素 $('div~div')
        - 当前这个元素的后面所有的兄弟元素 $('div').nextAll() -- 这个是方法,不是选择器
        - 当前这个元素的前面所有的兄弟元素 $('div').prevAll() -- 这个是方法,不是选择器
      3. 过滤选择器(基本,内容,可见性,属性)
        - :first
        - :last
        - :not(selector)
        - :even
        - :odd
        - :eq(index)
        - :gt(index)
        - :lt(index)
        - :contains(text)
        - :empty
        - :has(选择器)
        - :hidden
        - [attribute]
        - [attribute=value]
        - [attribute!=value]
        - [attribute^=value]
        - [attribute$=value]
        - [attribute*=value]
      4. 表单选择器
        - :input
        - :text
        - :password
        - :radio
        - :checkbox
        - :submit
    
    ## 工具方法
      1. $.each() 遍历数组或者对象中的数据
      2. $.trim() 去除字符串两边的空格
      3. $.type(obj) 得到数据的类型 ,像typeof
      4. $.isArray(obj) 判断是否是数组
      5. $.isFunction(obj) 判断是否是函数
    ## 属性操作
      1. 标签属性(自带的或者自定义的)
        - attr()
        - 属性设置和属性值读取
        - 对象.attr('属性名字','属性值')   可链式编程
        - 对象.attr({属性名字1:属性值1,属性名字2:属性值2})
        - 对象.attr('属性名字')  获取当前标签的属性值
        - prop()
      2. class属性
        - addClass()
        - removeClass()
        - toggleClass()
      3. 操作html内容/文本内容/值
        - html()
        - text()
        - val()
    ## CSS操作
      1. css('属性名字','值')
      2. css('属性名字','值').css('属性名字','值') 链式编程
      3. css({'属性名字':'值','属性名字':'值'})
    ## 设置/获取标签的位置数据
      1. offset() 相对页面左上角的坐标
      2. position() 相对于父级元素左上角的坐标,只有读的操作
      3. 写的操作要放在对象中
        - 不能带有单位
        - $('div').offset({let:10})
    ## 元素滚动问题
      1. scrollTop() 获取/设置元素中内容的滚动距离
      2. 读取元素的滚动距离
        - $(document.body).scrollTop()+$(document.documentElement).scrollTop()
        - $(window).scrollTop()
        - 读取的是选中的元素html,body上面滚动的距离,选中的是最外层元素相对于上面的距离
      3. 设置滚动到指定位置
        - $(body,html).scollTop(60) 设置
    ## 内容尺寸
      1. height() : 就是height
      2. width()  : 就是width
    ## 内部尺寸
      1. innerHeight() : height + padding
      2. innerWidth()  : widht + padding
    ## 外部尺寸
      1. outerHeight(false/true) :height + padding + border 如果是true 加上margin
      2. outerWidth(false/true)  :width + padding + border 如果是true则加上margin
    ## 筛选和过滤:方法
      1. first()
      2. last()
      3. eq()
      4. filter(选择器)
      5. not(选择器)
      6. has(选择器)
    ## 筛选_查找元素:父级元素,子级元素,兄弟元素
      1. children() 子级元素中找
      2. find() 后代元素中找
      3. parent() 父级元素  parents() 获取到的不仅是当前子元素的父级元素,还有父级元素的兄弟元素 
      4. prevAll() 前面所有的兄弟元素
      5. nextAll() 后面所有的兄弟元素
      6. siblings() 除了自己的所有兄弟元素
    ## 文档处理
      1. 添加/替换元素  
        - append(content) 向当前匹配的所有元素的最后插入指定内容
        - prepend(content) 当前元素内部的最前面插入指定内容
        - before(content) 向当前元素的前面插入指定内容
        - after(content) 指定内容插入当前元素的后面替换节点
        - replaceWith(content) 指定内容替换所有匹配的标签删除节点
      2. 删除元素
        - empty() 删除所有匹配元素的子元素
        - remove() 删除所有匹配的元素
      3. 
        - 目标.append('元素')  将元素追加到目标内部的最后面
        - 目标.appendTo('元素')将目标追加到元素内部的最后面
        - 目标.prepend('元素')  将元素追加到目标内部的最前面
        - 目标.prependTo('元素')将目标追加到元素内部的最前面
        - 目标.after('元素')  将元素追加到目标的后面
        - 目标.before('元素')  将元素追加到目标的前面
        - 目标.insertAfter('元素') 将目标追加到元素的后面
        - 目标.insertBefore('元素') 将目标追加到元素的前面
        - 目标.remove() 连同标签一起删除,斩草除根
        - 目标.empty() 清空标签的内容,斩草留根
      4. 创建元素的三种方式
        - 第一种:对象.append($(标签代码))或者$(标签代码).appendTo(对象)
        - 第二种:对象.html(html标签代码)
        - 第三种:对象.append(标签代码)
    ## 事件绑定:
      1. eventName(function(){})
        - 绑定对应事件名的监听,例子: $('#btn').click(function(){})
      2. on(eventName,function(){})
        - 通用绑定事件,例子: $('#btn').on('click',function(){})
      3. 特点:
        - eventName:编码方便,但只能添加一个监听,有个别的事件是没有的
        - on: 可以添加多个监听,通用
    ## 事件解绑
      1. off(eventName)
    ## 坐标:
      1. e.clientX,e.clientY 相对于可视区域的坐标(左上角)
      2. e.pageX,e.pageY 相对于页面左上角
      3. e.offsetX,e.offsetY 相对于事件元素左上角
    ## 事件处理
      1. 组件事件冒泡: e.stopPropagation()
      2. 阻止事件默认行为: e.pareventDefault()
    ## 事件委托(如果代码中需要产生新的元素,同时新的元素需要有事件的时候),使用on绑定事件

   
