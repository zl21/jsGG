/*
* 作者： 李某华
* 时间：2019-12-17 10:44:28
* 功能：封装兼容性函数
* 注意事项：请勿在引入当前类库的页面 使用my标识符
* */

/*
* 目录：
*   getWinSize()：获取屏幕宽高.无参数，返回一个对象，width属性获取屏幕的宽度，height属性获取屏幕的高度
*   getID(eleIDName)：通过ID获取元素，参数是元素的ID名  返回获取的元素
*   getEleToWin(ele)：1个参数，元素节点 获取元素距离屏幕边缘的位置 返回一个对象 包含left和top
*   getWinScroll()：没有参数，获取浏览器滚动条的位置，返回一个对象，包含top和left属性
*   setWinScroll(n,m): 设置浏览器滚动条位置，两个参数，第一个是横向滚动条，第二个是竖向滚动条，如果值传递一个，代表横向
*   getDocSize()：无参数，获取文档的宽高，返回一个对象，包含width和height属性
*   getPreSibling(ele):获取ele元素的上一个兄弟元素 一个参数
* */
+function (w) {
    w.my = {};

    /*
    * getWinSize()
    *   无参数
    *   返回一个对象，width属性获取屏幕的宽度，height属性获取屏幕的高度
    * */
    my.getWinSize = function () {
        var w = document.documentElement.clientWidth||document.body.clientWidth;
        var h = document.documentElement.clientHeight||document.body.clientHeight;;
        return {
            width:w,
            height:h
        }
    }


    /*
    * getID(eleIDName)
    *   功能：获取标签通过id
    *   参数是元素的ID名  返回获取的元素
    * */
    my.getID = function (eleIDName) {
        return document.getElementById(eleIDName);
    }

    /*
    * getEleToWin(ele)
    *   1个参数，元素节点
    *   功能 获取元素距离屏幕边缘的位置
    *   返回一个对象 包含left和top
    *
    * */
    my.getEleToWin = function (ele) {
        var l = 0,t = 0;
        var oNewCon = ele;
        while(oNewCon){
            // 因为offsetLeft获取的是元素距离定位父级边框内侧的长度，所以，如果不是oCon，那么就要获取边框
            if (oNewCon == ele){
                l += oNewCon.offsetLeft;
                t += oNewCon.offsetTop;
                oNewCon = oNewCon.offsetParent;
            }else{
                l += oNewCon.offsetLeft + oNewCon.clientLeft;
                t += oNewCon.offsetTop + oNewCon.clientTop;
                oNewCon = oNewCon.offsetParent;
            }
        }
        return {left:l,top:t};
    };


    /*
    * getWinScroll()
    *   没有参数，获取浏览器滚动条的位置，返回一个对象，包含top和left属性
    *
    * */
    my.getWinScroll = function () {
        var h = document.documentElement;
        var top = window.pageYOffset || h.scrollTop || document.body.scrollTop;
        var left = window.pageXOffset || h.scrollLeft || document.body.scrollLeft;
        return {
            top:top,
            left:left
        }
    }


    /*
    * setWinScroll(n,m): 设置浏览器滚动条位置，
    *   两个参数，第一个是横向滚动条，第二个是竖向滚动条，如果值传递一个，代表横向
    * */
    my.setWinScroll = function (n,m) {
        if (typeof m != "undefined" && typeof m =="number") {
            document.documentElement.scrollTop = m;
            document.body.scrollTop =m
        }
        if (typeof n != "undefined" && typeof n =="number") {
            document.documentElement.scrollLeft = n;
            document.body.scrollLeft = n;
        }
    };

    /*
    * getDocSize()
    *   无参数，获取文档的宽高，返回一个对象，包含width和height属性
    *
    * */
    my.getDocSize = function () {
        return {
            height:document.documentElement.offsetHeight || document.body.offsetHeight,
            width:document.documentElement.offsetWidth || document.body.offsetWidth
        }
    }


    /*
    * getPreSibling(ele):获取ele元素的上一个兄弟元素 一个参数
    *
    * */
    my.getPreSibling = function (ele) {
        if (ele.previousElementSibling){
            return ele.previousElementSibling;
        }else{
            return ele.previousSibling;
        }
    };

    /*
    * getNextSibling(ele):获取ele元素的下一个兄弟元素 一个参数
    *
    * */
    my.getNextSibling = function (ele) {
        if (ele.nextElementSibling){
            return ele.nextElementSibling;
        }else{
            return ele.nextSibling;
        }
    };

    /*
    * getfirChild(ele):获取ele元素的第一个子元素节点
    *
    * */
    my.getfirChild = function (ele) {
        if (ele.firstElementChild){
            return ele.firstElementChild;
        }else{
            return ele.firstChild;
        }
    };

    /*
    * getlastChild(ele):获取ele元素的最后一个子节点
    *
    * */
    my.getlastChild = function (ele) {
        if (ele.lastElementChild){
            return ele.lastElementChild;
        }else{
            return ele.lastChild;
        }
    };

    /*
    *prependChild(paren,ele):
    *   两个参数 分别是父节点和被插入的节点   功能在元素的子元素的最前边插入节点方法
    * */
    //在元素的最前边插入节点方法封装
    my.prependChild = function (paren,ele) {
        if (paren.children.length) {
            paren.insertBefore(ele,my.getfirChild(paren))
        }else{
            paren.appendChild(ele);
        }
        return ele;
    };

    /*
    * insetAfter(newele,oldele):
    * 两个参数，新节点和旧节点
        * 在某个节点的后边插入元素 方法封装
            * */
            my.insetAfter = function(newele,oldele){
                if (oldele.nextElementSibling){
                    oldele.parentNode.insertBefore(newele,oldele.nextElementSibling);
                }else{
            oldele.parentNode.appendChild(newele);
        }
        return newele;
    }

    /*
    * remove（ele）  一个参数  删除某一个元素
    * */
    my.remove = function (ele) {
        if (ele){
            ele.parentNode.removeChild(ele);
            return ele
        }else{
            return undefined;
        }

    };

    /*
    * empty（ele） 一个参数  清空当前元素的所有子节点
    * */
    my.empty = function (ele) {
        while(ele.firstElementChild){
            ele.removeChild(ele.firstElementChild);
        }
    };
}(window);

